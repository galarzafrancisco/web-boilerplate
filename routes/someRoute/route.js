/* ======================================================================
|
| Requirements
|
====================================================================== */
const router = require('express').Router();
const logic = require('./logic');


/* ======================================================================
|
| Routes
|
====================================================================== */
router.get('/', (req, res) => {
    console.log('get');
    res.status(200).send('someRoute get ok');
})

router.post('/', (req, res) => {
    console.log('post');
    res.status(200).send('someRoute post ok');
})

module.exports = router;