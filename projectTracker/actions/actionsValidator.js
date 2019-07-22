function validateAction(req, res, next) {
  try {
    const { description, notes } = req.body;
    if (!notes || !description) {
      return res
        .status(400)
        .json({ message: 'missing action description or notes' });
    } else if (notes === '' || notes.length < 3) {
      return res.status(400).json({
        error: 'notes is required and cannot be less than 3 characters'
      });
    } else if (description === '' || description.length < 5) {
      return res.status(400).json({
        error: 'description is required and cannot be less than 5 characters'
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = validateAction;