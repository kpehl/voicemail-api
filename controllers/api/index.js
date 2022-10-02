const router = require('express').Router();
const vmRoutes = require('./voicemails');

router.use('/voicemails', vmRoutes);

module.exports = router;