const router = require('express').Router();
const { Card } = require('../db/models');

router.post('/', async (req, res) => {
  const { text } = req.body;
  const userid = req.session.user.id;

  try {
    const createdTask = await Card.create({
      text,
      user_id: userid,
    });
    res.json(createdTask);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка' });
  }
});

module.exports = router;
