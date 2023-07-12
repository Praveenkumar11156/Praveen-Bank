import { register,login, Deposit,withdraw,getAllUser,myprofile} from "../controller/user.js";
import express from 'express'
import auth from '../middleware/auth.js'
import user from '../middleware/user.js'

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.put('/deposit',[auth,user],Deposit)
router.put('/withdraw',[auth,user],withdraw)
router.get('/viewall',getAllUser)
router.get('/profile',[auth,user],myprofile)

export default router 