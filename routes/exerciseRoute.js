import express from 'express'

import { getExercises } from '../controllers/exerciseControllers.js'

const exerciseRouter = express.Router()

exerciseRouter.get('/', getExercises)

export default exerciseRouter
