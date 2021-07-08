const express = require('express');
const router = express.Router();
router.use('/blog', require('./blogs'))
module.exports = router;