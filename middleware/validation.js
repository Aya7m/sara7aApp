import { signUpValid } from "../src/modules/user/user.validation.js"
import { AppError } from "../utilites/AppErr.js"


export const validate = (schema) => {
    return (req, res, next)=> {
    let { error } = schema.validate({...req.body,...req.params,...req.query}, { abortEarly: false })
    if (!error) {
        next()
    } else {

        let errMessage= error.details.map(err=>err.message)

       next(new AppError(errMessage,401))
            
        
        
    }

}

}