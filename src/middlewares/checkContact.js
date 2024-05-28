import { getContactById } from '../services/contacts.js';

export const checkContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(400).json({
        status: 400,
        message: 'Contact id is required!',
      });
    }

    if (!contactId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({
        status: 404,
        message: `Contact ${contactId} not found!`,
      });
    }

    next();
  } catch {
    return res.status(500).json({
      status: 500,
      message: 'Server error!',
    });
  }
};
