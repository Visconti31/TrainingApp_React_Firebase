import express from 'express'

import {
  createExercise,
  getExercise,
  getExercises,
} from '../controllers/exerciseControllers.js'

const exerciseRouter = express.Router()

exerciseRouter.get('/', getExercises)
exerciseRouter.post('/create', createExercise)
exerciseRouter.get('/exercise/:id', getExercise)

export default exerciseRouter
