const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
    raw: true,
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    req.session.isAuthorized = true;
    return res.json(user);
  }
  res.json({ succes: false });
});

module.exports = router;
