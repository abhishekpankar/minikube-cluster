const express = require('express');
const router = express.Router();

router.get('/address', (req, res, next) => {
    res.send({
        'street/area': 'Dalhousie Street',
        city: 'Julidh',
        state: 'Nihra',
        country: 'Tagraland'
    });
})

module.exports = router;