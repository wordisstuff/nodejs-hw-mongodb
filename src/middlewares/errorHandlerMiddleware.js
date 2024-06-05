import { HttpError } from "http-errors";
import { isHttpError } from "http-errors";

export const errorHandlerMiddleware = (error, req, res, next) => {

    if (error instanceof HttpError) {
        res.status(error.status).json({
            status: error.status,
            message: error.name,
            data:{message: "Contact not found!"}
        });
        return;
    };

    console.log("1122", error.message);
    res.status(500).json({
        status: 500,
        message: error.message
    });
};
