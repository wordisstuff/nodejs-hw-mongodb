import { Schema, model } from "mongoose";

const contactSchema = new Schema(
    {
        name:string, required:true,
phoneNumber:string, required:true,
email:{type:String||Number},
isFavourite:{type:Boolean, default:false},
contactType:{type:String, enum:['work', 'home', 'personal'], required:true},
createdAt:{Date},
updatedAt :{Date}
    }
);
