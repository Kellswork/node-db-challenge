const express = require('express');
const { getactions } = require('./actionsModels');

const router = express.Router();
module.exports = router;

router.get('/', async (req, res) => {
    try {
      const actions = await getactions();
      if (actions.length === 0) {
        return res
          .status(404)
          .json({ message: 'you currently do not have any project' });
      }
      return res.status(200).json(actions);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'an error occured while getting projects' });
    }
});

