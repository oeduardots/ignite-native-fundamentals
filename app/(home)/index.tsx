import { Text, View, TextInput, TouchableOpacity } from "react-native"

import { styles } from './styles'

import { Participant } from '../components/participant'

export default function HomeScreen() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 27 de Maio de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante" 
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Eduardo Tavares" />
      <Participant name="Rodrigo Gonçalves" />
      <Participant name="Diego Fernandes" />
      <Participant name="Mayk Brito" />
    </View>
  )
}
