const express = require('express');
const router  = express.Router();
const auth = require('../middleware/auth');
const {sponsor} = require('../api/sponsor');

router.route('/').post(sponsor);
module.exports = router;
