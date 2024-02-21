import firebase from '../firebase.js'
import Exercise from '../models/exerciseModel.js'

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from 'firebase/firestore'

const db = getFirestore(firebase)

export const getExercises = async (req, res, next) => {
  try {
    console.log('Try block')

    const exercises = await getDocs(collection(db, 'exercises'))
    const exerciseArray = []

    if (exercises.empty) {
      res.status(400).send('No products found')
    } else {
      exercises.forEach((doc) => {
        const exercise = new Exercise(
          doc.is,
          doc.data().name,
          doc.data().bodyPart,
          doc.data().exerciseType
        )
        exerciseArray.push(exercise)
      })
    }

    res.status(200).send(exerciseArray)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
