import { model, Schema, Types } from "mongoose";

const schema = new Schema({
    contain: String,
    receiverId: {
        type: Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: { createdAt: true },
    versionKey: false
})

export const Message = model('Message', schema)