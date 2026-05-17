const express = require('express');
const router = express.Router();
const { listAllProjects, searchProjectById, createProject, updateProject, deleteProject } = require('../controllers/ProjectController');

router.get('/', listAllProjects);
router.get('/:id', searchProjectById);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;    