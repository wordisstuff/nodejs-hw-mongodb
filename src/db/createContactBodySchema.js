import Joi from "joi";


export const createContactBodySchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.number().required(),
    email: Joi.string().email().min(3).max(20),
    isFavourite: Joi.boolean().default(false),
    contactType: Joi.string().valid('work', 'home', 'personal').required().default('personal'),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
});
