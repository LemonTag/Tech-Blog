const router = require('express').Router();
const homeRoutes= require('./homeRoutes');
const dashboardRouters = require('./dashboardRouters');

router.use('/users', homeRoutes);
router.use('/projects', dashboardRouters);

module.exports = router;