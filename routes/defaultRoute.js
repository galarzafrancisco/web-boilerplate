// Requirements
const router = require('express').Router()

router.all('*', (req, res) => {
    res.status(404).send('Route not found');
})

// Export the router
module.exports = router;
