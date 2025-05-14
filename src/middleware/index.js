const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const authenticate = (req, res, next) => {
    next();
};
module.exports = {
    authenticate, logger
}