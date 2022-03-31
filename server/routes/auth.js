const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.user) res.json(req.session.user);
  else { res.json({}); }
});

module.exports = router;
