import createHttpError from "http-errors";
import { deleteContact, getAllContacts, getContactById, patchContact, postContact } from "../services/contacts.js";

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
        console.log('its ME!!!');
        next(createHttpError(404, "Contact not found!"));

    return;
    };

    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact
    });
};

export const postContactController = async (req, res) => {

    const contact = await postContact(req.body);
    console.log(contact);
    res.status(201).json({
        message: "Successfully created contact!",
        data: contact
    });
};


export const patchContactController = async (req, res, next) => {
    const { contactId } = req.params;

    const contact = await patchContact(contactId, req.body);
    if (!contact) {
        next(createHttpError(404, "Contact not found!"));
        res.json(
            { data:{ message: "Contact not found!" }}
        );
        return;
    };
    res.json({
        status: 200,
        message: `Successfully updated contact with id ${contactId}!`,
        data: contact
    });
};


export const deleteContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await deleteContact(contactId);

    if (!contact) {
        next(createHttpError(404, "Contact not found!"));
        return;
    };

    res.json({
        status: 204,
        message: `Successfully deleted contact with id ${contactId}!`
    });
};
