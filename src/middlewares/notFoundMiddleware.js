export const notFoundMiddelware = (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Route not found"
    });
};
