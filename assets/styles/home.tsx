import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  content: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, textAlign: 'center' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  button: { backgroundColor: '#007AFF', padding: 18, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 12, borderLeftWidth: 5, borderLeftColor: '#007AFF' },
  bookTitle: { fontSize: 18, fontWeight: '700' },
  bookPrice: { color: '#2ecc71', fontWeight: 'bold', marginTop: 5 }
});