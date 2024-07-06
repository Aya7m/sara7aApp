import { model, Schema } from "mongoose";


const schema=new Schema({
    username:String,
    email:String,
    password:String,
    confirmEmail:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'

    },
    
},{
    timestamps:{createdAt:true},
    versionKey:false,
})

export const User=model('User',schema)