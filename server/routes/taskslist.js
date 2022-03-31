const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  if (!req.session.user) return res.json([]);

  const currentUser = req.session.user.id;
  const tasksByUser = await Card.findAll(
    {
      where: {
        user_id: currentUser,
      },
    },
    { raw: true },
  );
  res.json(tasksByUser);
});

router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;

  await Card.destroy({
    where: { id: taskId },
  });
  res.json(taskId);
});

router.put('/:id', async (req, res) => {
  const { text, id } = req.body;

  await Card.update({ text }, {
    where: { id },
  });

  const currentTask = await Card.findByPk(id);
  res.json(currentTask);
});

module.exports = router;
