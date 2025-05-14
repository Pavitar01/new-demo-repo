const express = require('express');
const router = express.Router();

const { getExample, postExample,getUsers } = require('../controllers');

router.get('/example', getExample);
router.get('/users', getUsers);

const setRoutes = (app) => {
    app.use('/api', router);
};

module.exports = setRoutes;