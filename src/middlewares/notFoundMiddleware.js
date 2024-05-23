export const notFoundMiddelware = (req, res) => {
    res.status(404).send('Not found');
};
