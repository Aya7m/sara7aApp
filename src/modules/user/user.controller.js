import { User } from "../../../database/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmails } from "../../email/email.js"
import { catchError } from "../../../middleware/catchError.js"
import { AppError } from "../../../utilites/AppErr.js"

const signUp = catchError(async (req, res) => {

    let user = await User.insertMany(req.body)
    sendEmails(req.body.email)
    user[0].password = undefined,
     res.status(201).json({ message: 'success', user })
})

const signIn = catchError(async (req, res, next) => {

    let user = await User.findOne({ email: req.body.email })

    if (!user || !bcrypt.compareSync(req.body.password, user.password))
        // return res.status(401).json({ message: 'password incorrect or email' })
        return next(new AppError('password incorrect or email'), 401)


    jwt.sign({ userId: user._id, name: user.username, role: user.role }, 'mynameisAya', (err, token) => {
        res.json({ message: 'success', token })
    })
})

export {
    signUp,
    signIn
}