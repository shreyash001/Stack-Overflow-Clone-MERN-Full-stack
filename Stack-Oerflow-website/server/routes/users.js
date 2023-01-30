import express from 'express'

import { signup, login } from '../controllers/auth.js'
import { getAllUsers } from '../controllers/users.js'

const router = express.Router();

// router.post('/signup', () => {})
// router.post('/login', () => {})

router.post('/signup', signup)
router.post('/login', login)

router.get("/getAllUsers",getAllUsers)

export default router
