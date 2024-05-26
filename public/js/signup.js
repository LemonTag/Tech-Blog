userRouter.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        user: req.body.user,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        req.session.user = dbUserData.user;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });