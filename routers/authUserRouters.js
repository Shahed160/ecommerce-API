const express=require('express')
const router=express.Router();
const {register,login,refreshToken,home}=require("../controllers/authUserController")
const AuthMiddleware=require('../routers/authMiddleware')

router.post('/register',register);
router.post('/login',login);
router.post('/refreshToken',refreshToken);
module.exports=router;

router.get('/home',AuthMiddleware,home)