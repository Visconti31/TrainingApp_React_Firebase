import firebase from '../firebase.js'
import Exercise from '../models/exerciseModel.js'

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

const db = getFirestore(firebase)

// Get all the exercises
export const getExercises = async (req, res, next) => {
  try {
    const exercises = await getDocs(collection(db, 'exercises'))
    const exerciseArray = []

    if (exercises.empty) {
      res.status(400).send('No products found')
    } else {
      exercises.forEach((doc) => {
        const exercise = new Exercise(
          doc.id,
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

// Get one exercise
export const getExercise = async (req, res, next) => {
  try {
    const id = req.params.id

    const exercise = doc(db, 'exercises', id)
    const data = await getDoc(exercise)

    if (data.exists()) {
      res.status(200).send(data.data())
    } else {
      res.status(400).send('Product not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// Update exercise
export const updateExercise = async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body
    const docRef = doc(db, 'exercises', id)
    await updateDoc(docRef, data)

    const exercise = await getDoc(docRef)

    res.status(200).send(exercise.data())
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// Create exercise
// TODO: Validate the data
export const createExercise = async (req, res, next) => {
  try {
    const data = req.body

    await addDoc(collection(db, 'exercises'), data)
    res.status(200).send('Product created')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// Delete exercise
export const deleteExercise = async (req, res, next) => {
  try {
    const id = req.params.id
    await deleteDoc(doc(db, 'exercises', id))
    res.status(200).send('Exercise deleted')
  } catch (error) {
    res.status(500).send(error.message)
  }
}
