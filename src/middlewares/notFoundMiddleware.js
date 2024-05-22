export const notFoundMiddelware = (req, res) => {
    res.status(404).send({
        message: 'Not found'
    });
};
