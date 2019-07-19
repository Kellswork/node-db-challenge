const express = require('express');
const { getProjects, addProject, getProjectId } = require('./projectsModels');
const {validateProject, validateProjectId} = require('./projectsValidator');
const router = express.Router();
module.exports = router;

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    if (projects.length === 0) {
      return res
        .status(404)
        .json({ message: 'you currently do not have any project' });
    }
    return res.status(200).json(projects);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'an error occured while getting projects' });
  }
});

router.get('/:id', validateProjectId, async (req, res) => {
  try {
    const project = await getProjectId(req.params.id);
    if (project.length === 0) {
      return res
        .status(404)
        .json({ message: 'you currently do not have any project' });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'an error occured while getting projects' });
  }
});


router.post('/', validateProject, async (req, res) => {
  try {
    const completed = req.body.completed === 1 ? 'true' : 'false';
    const project = await addProject({ ...req.body, completed });
    return res.status(201).json(project);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'could not save project to the database' });
  }
});


