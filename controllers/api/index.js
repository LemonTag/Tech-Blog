const router = require('express').Router();

const userRouter = require('./userRoutes')
const postRouter = require('./postRoutes');


router.use('/user', userRouter); // Mount the router object at the root path

router.use('/post', postRouter)
module.exports = router