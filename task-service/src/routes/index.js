const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res, next) => {
    res.send({
        name: 'Complete the Homework',
        priority: 'high'
    });
})

module.exports = router;