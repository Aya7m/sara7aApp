

import joi from 'joi'

const addMessageValidate = joi.object({
    content: joi.string().min(3).max(1000).required(),
    
   
})
export{
    addMessageValidate
}