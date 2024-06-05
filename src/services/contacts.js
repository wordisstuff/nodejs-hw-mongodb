import { Contact } from "../db/contact.js";

export const getAllContacts = async () => {
    const contacts = await Contact.find({});

    return contacts;
};


export const getContactById = async (id) => {
    const contact = await Contact.findById(id);

    return contact;
};
