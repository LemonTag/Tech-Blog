const router = require('express').Router();
// Import the Project model from the models folder
const { Post, User } = require('../models');

router.get('/', async(req, res) => {
  try {
    const allPost = await Post.findAll({
      include:[User]
    })
    const posts = allPost.map((post) => post.get({plain: true}))
    console.log(posts)
    res.render('homepage', posts)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
})


module.exports = router;
