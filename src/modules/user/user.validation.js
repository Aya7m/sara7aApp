

import joi from 'joi'

const signUpValid = joi.object({
    username: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
    rePassword: joi.valid(joi.ref('password')).required()
})

const signInValid = joi.object({
    
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
    
})

export{
    signUpValid,
    signInValid
}