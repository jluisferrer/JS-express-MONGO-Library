import { Schema, model } from "mongoose";

// esquema del modelo
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["user", "admin", "super_admin"],
            default: "user"
        },       
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema)

//exportamos 

export default User