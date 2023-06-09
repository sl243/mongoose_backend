import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {type: String, required: true, unique: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    name: { 
        firstName: {type: String, required: true},
        middleName: {type: String},
        lastName: {type: String, required: true}
     },
    dateOfBirth: { type: String},
    phoneNumber: {type: String, required: true},
    emmercencyNo: {type: String, required: true},
    gender: {type: String, enum: ['male' , 'female']},
    presenAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true}
  });


// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;