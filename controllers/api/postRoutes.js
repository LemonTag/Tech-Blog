const router = require('express').Router()
const {Post} = require('../../models')
router.post('/', async (req, res) => {
    try {
      const newProject = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // If a DELETE request is made to /api/projects/:id, that project is deleted. 
  router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router