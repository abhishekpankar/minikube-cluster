const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/users', async (req, res, next) => {
    const user = {
        name: 'Abhishek',
    }

    res.send({
        message: `User Fetched`,
        result: user,
    });
})

// This will not work as it will conflict with the ingress path
router.get('/', async (req, res, next) => {
    res.send({
        message: `Hello World!`,
        result: user,
    });
})

module.exports = router;