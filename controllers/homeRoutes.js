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

router.get('/homepage', async (req, res) => {
  try {
    console.log(req.session.logged_in);
    res.render('homepage', {
      logging_in: req.session.logged_in
    })
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})


router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard')
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

router.get('/sign', async (req, res) => {
  try {
    res.render('login')
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;
