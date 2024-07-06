import { Router } from "express";
import { signIn, signUp } from "./user.controller.js";
import { checkEmail } from "../../../middleware/checkEmail.js";
import { validate } from "../../../middleware/validation.js";
import { signInValid, signUpValid } from "./user.validation.js";


const userRouter=Router()

userRouter.post('/signup',validate(signUpValid),checkEmail,signUp)
userRouter.post('/signin',validate(signInValid),signIn)


export default userRouter