import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { styles } from '@/assets/styles/home';

export default function MainApp() {
  const [isLogged, setIsLogged] = useState(false);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  
  const registerUser = useMutation(api.users.register);

  const books = [
    { id: '1', title: 'O Hobbit', author: 'J.R.R. Tolkien', price: 'R$ 54,90' },
    { id: '2', title: 'Clean Code', author: 'Robert C. Martin', price: 'R$ 95,00' },
    { id: '3', title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', price: 'R$ 22,00' },
  ];

  const handleLogin = async () => {
    if (nome && senha) {
      await registerUser({ nome, senha });
      setIsLogged(true);
    } else {
      Alert.alert("Erro", "Campos obrigatórios!");
    }
  };

  if (!isLogged) {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Entrar na Loja</Text>
        <TextInput style={styles.input} placeholder="Usuário" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Cadastrar e Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ padding: 20 }}
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text style={styles.bookPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}