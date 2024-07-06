
import { Message } from "../../../database/models/message.model.js"
import { catchError } from "../../../middleware/catchError.js"
import { AppError } from "../../../utilites/AppErr.js"



const createMessage = catchError(async (req, res) => {
    let message = await Message.insertMany(req.body)
    res.status(201).json({ message: 'success', message })

})

const getAllmessage = catchError(async (req, res) => {

    let messages = await Message.find({ receiverId: req.user.userId })
    res.status(200).json({ message: 'success', messages })
})

const deleteMessage = catchError(async (req, res,next) => {
    let message = await Message.findByIdAndDelete(req.params.id, req.body)
    // if (!message) return res.status(404).json({ message: 'message not found !' })
    if (!message) return next(new AppError('message not found !'),404)
    res.status(200).json({ message: 'success', message })

})
export {
    createMessage,
    getAllmessage,
    deleteMessage
}