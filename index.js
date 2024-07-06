process.on('uncaughtException',()=>{
    console.log('err in code');

})

import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.routers.js'
import messageRouter from './src/modules/message/message.routers.js'
import { User } from './database/models/user.model.js'
import jwt from 'jsonwebtoken'
import { AppError } from './utilites/AppErr.js'
import { globalError } from './middleware/globalErrorHandling.js'

const app = express()
const port = 3000
app.use(express.json())


app.use('/auth', userRouter)
app.use('/message', messageRouter)

app.get('/verify/:token', async (req, res, next) => {
    jwt.verify(req.params.token, 'ayosha', async (err, payload) => {
        // if(err) return res.json(err)
        if (err) return next(new AppError(err),401)
        await User.findOneAndUpdate({ email: payload.email }, { confirmEmail: true })
        res.json({ message: 'success', email: payload.email })
    })

})

app.use('*', (req, res, next) => {
    // res.status(404).json({message:`rout not found ${req.originalUrl}`})
    next(new AppError(`rout not found ${req.originalUrl}`, 404))
})

app.use(globalError)

process.on('uncaughtException',(err)=>{
    console.log("err",err);

})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))