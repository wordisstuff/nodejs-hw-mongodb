import createHttpError from "http-errors";
import { getAllContacts, getContactById } from "../services/contacts.js";

export const getAllContactsController = async (req, res, next) => {

    const contacts = await getAllContacts();

    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data: contacts
    });
};

export const getContactByIdController = async (req, res,next) => {

    const { contactId } = req.params;
    const contact = await getContactById(contactId);

if (!contact) {
    next(createHttpError(404, "Contact not found!"));
    return;
    };

    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact
    });
};
