import express from 'express'

import {
  createExercise,
  getExercises,
} from '../controllers/exerciseControllers.js'

const exerciseRouter = express.Router()

exerciseRouter.get('/', getExercises)
exerciseRouter.post('/create', createExercise)

export default exerciseRouter
