import mongoose from "mongoose";

export const validateObjectId = (req, res, next) => {
  const { contactId } = req.params;
  if (!mongoose.isValidObjectId(contactId)) {
    return res.status(404).json({
      status: 404,
      message: "Invalid contact ID!"
    });
  }
  next();
};
