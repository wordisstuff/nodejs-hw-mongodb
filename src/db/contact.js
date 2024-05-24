import { Schema, model } from "mongoose";

const contactSchema = new Schema(
    {
        name:{type:String, required:true},
        phoneNumber:{type: Number, required:true},
        email:{type:String},
        isFavourite:{type:Boolean, default:false},
        contactType:{type:String, enum:['work', 'home', 'personal'], required:true, default:'personal'},
        createdAt:{Date},
        updatedAt :{Date}
    }, {timestamps: true}
);

export const Contact = model('contacts',contactSchema);
