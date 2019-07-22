const { getProjectId } = require('./projectsModels');


function validateProject(req, res, next) {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: 'missing project name or description' });
    } else if (name === '' || name.length < 3) {
      return res.status(400).json({
        error: 'name is required and cannot be less than 3 characters'
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

async function validateProjectId(req, res, next) {
  try {
    const { id } = req.params;
    const project = await getProjectId(id);
    if (!Number(id)) {
      return res.status(400).json({ error: 'the ID provided is not a number' });
    } else if (!project) {
      return res.status(400).json({ error: 'the ID provided is invalid' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {validateProject, validateProjectId};
