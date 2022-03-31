const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 5);
  const user = await User.create({
    name,
    email,
    password: passwordHash,
  });

  req.session.user = user;
  req.session.isAuthorized = true;

  return res.json(user);
});

module.exports = router;
