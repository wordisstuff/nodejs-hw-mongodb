import { Router } from "express";
// import { validateObjectId } from "../middlewares/validateObjectId.js";
import { deleteContactController, getAllContactsController, getContactByIdController, patchContactController, postContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const contactsRouter = Router();


contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));
// contactsRouter.get('/contacts/:contactId', validateObjectId,ctrlWrapper(getContactByIdController));
contactsRouter.get('/contacts/:contactId',ctrlWrapper(getContactByIdController));

contactsRouter.post('/contacts', ctrlWrapper(postContactController));

contactsRouter.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

contactsRouter.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouter;
