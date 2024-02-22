import express from 'express'

import {
  createExercise,
  deleteExercise,
  getExercise,
  getExercises,
  updateExercise,
} from '../controllers/exerciseControllers.js'

const exerciseRouter = express.Router()

exerciseRouter.get('/', getExercises)
exerciseRouter.post('/create', createExercise)
exerciseRouter.get('/exercise/:id', getExercise)
exerciseRouter.put('/update/:id', updateExercise)
exerciseRouter.delete('/delete/:id', deleteExercise)

export default exerciseRouter
