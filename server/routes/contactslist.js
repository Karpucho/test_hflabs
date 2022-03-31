const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  if (!req.session.user) return res.json([]);

  const currentUser = req.session.user.id;
  const contactsByUser = await Card.findAll(
    {
      where: {
        user_id: currentUser,
      },
    },
    { raw: true },
  );
  res.json(contactsByUser);
});

router.delete('/:id', async (req, res) => {
  const contactId = req.params.id;

  await Card.destroy({
    where: { id: contactId },
  });
  res.json(contactId);
});

router.put('/:id', async (req, res) => {
  const { text, id } = req.body;

  await Card.update({ text }, {
    where: { id },
  });

  const currentContact = await Card.findByPk(id);
  res.json(currentContact);
});

module.exports = router;
