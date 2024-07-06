import { connect } from "mongoose";


export const dbConnection=connect('mongodb://localhost:27017/sara7aApp').
then(()=>{
    console.log('database connected successfully .');
}).catch(()=>{
    console.log('errr in database');
})