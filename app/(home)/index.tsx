import { useState } from "react"
import { 
  Text, 
  View, 
  TextInput, 
  FlatList,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native"

import { styles } from './styles'

import { Participant } from '../components/participant'

export default function HomeScreen() {
  const [participants, setParticipants] = useState([""])

  function handleParticipantAdd() {
    if (participants.includes("Eduardo")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
    }

    setParticipants(state => [...state, 'Ana'])
    console.log("Você clicou no botão de Adicionar!")
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      }
    ])

    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#131016"
      />
      
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Eduardo")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evendo ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
