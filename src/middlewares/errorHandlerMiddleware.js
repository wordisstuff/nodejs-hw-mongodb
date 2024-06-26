import { HttpError } from "http-errors";

export const errorHandlerMiddleware = (error, req, res, next) => {

    if (error instanceof HttpError) {
        console.log("HTTP ERROR 10", error);
        res.status(error.status).json({
            status: error.status,
            message: error.name,
            data:error.errors
        });
        return;
    };

    console.log("1122", error.message);
    res.status(500).json({
        status: 500,
        message: "Something went wrong",
        data: {message: error.message}
    });
};
