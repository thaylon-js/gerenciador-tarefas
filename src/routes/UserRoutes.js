const express = require('express');
const { listAllUsers, createUser } = require('../controllers/UserController');

const router = express.Router();

router.get('/', listAllUsers);
router.post('/', createUser);

module.exports = router;