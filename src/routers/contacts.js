import { Router } from "express";
import { validateObjectId } from "../middlewares/validateObjectId.js";
import { deleteContactController, getAllContactsController, getContactByIdController, patchContactController, postContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactBodySchema } from "../db/createContactBodySchema.js";

const contactsRouter = Router();

contactsRouter.use('/contacts/:contactId', validateObjectId);

contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));

contactsRouter.get('/contacts/:contactId',ctrlWrapper(getContactByIdController));

contactsRouter.post('/contacts',
    validateBody(createContactBodySchema),
    ctrlWrapper(postContactController));

contactsRouter.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

contactsRouter.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouter;
