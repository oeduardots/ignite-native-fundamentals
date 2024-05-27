import { Text, View, StyleSheet, TextInput } from "react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 27 de Maio de 2024
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante" 
        placeholderTextColor="#6b6b6b"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  eventName: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#ffffff",
    padding: 16,
    fontSize: 16
  }
})