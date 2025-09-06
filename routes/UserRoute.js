import express from "express"
import {createUser,getUser} from '../controller/UserController.js'

const router =express.Router()

router.post('/create-user',createUser)
router.get('/get-users',getUser)

export default router;
