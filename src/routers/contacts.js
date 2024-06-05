import { Router } from "express";
// import { validateObjectId } from "../middlewares/validateObjectId.js";
import { getAllContactsController, getContactByIdController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const contactsRouter = Router();


contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));
// contactsRouter.get('/contacts/:contactId', validateObjectId,ctrlWrapper(getContactByIdController));
contactsRouter.get('/contacts/:contactId',ctrlWrapper(getContactByIdController));


export default contactsRouter;
