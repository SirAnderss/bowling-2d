import { addDoc, collection, getFirestore } from 'firebase/firestore'
import app from './client'

const db = getFirestore(app)

export const registerNewPlayers = async players => {
  const dataPlayers = JSON.parse(JSON.stringify(players))

  const savedPlayers = []

  for (let i = 0; i < dataPlayers.length; i++) {
    try {
      const docRef = await addDoc(collection(db, 'players'), {
        name: dataPlayers[i].name,
        score: dataPlayers[i].score
      })

      savedPlayers.push({
        id: docRef.id,
        ...dataPlayers[i]
      })
    } catch (error) {
      console.log(error.code, error.message)
      savedPlayers.push('unsaved')
    }
  }

  return savedPlayers
}
