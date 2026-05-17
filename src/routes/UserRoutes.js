const express = require('express');
const { listAllUsers, searchUserById, createUser, updateUser, deleteUser } = require('../controllers/UserController');

const router = express.Router();

router.get('/', listAllUsers);
router.get('/:id', searchUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;