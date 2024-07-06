import { Router } from "express";
import { createMessage, deleteMessage, getAllmessage } from "./message.controller.js";
import { vertifyToken } from "../../../middleware/verifyToken.js";
import { addMessageValidate } from "./message.validation.js";
import { validate } from "../../../middleware/validation.js";



const messageRouter=Router()

messageRouter.use(vertifyToken)
messageRouter.post('/',validate(addMessageValidate),createMessage)
messageRouter.get('/',getAllmessage)
messageRouter.delete('/:id',deleteMessage)
export default messageRouter