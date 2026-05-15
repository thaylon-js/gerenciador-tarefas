const UserService = require('../services/UserServices');

const listAllUsers = async (req, res) => {
    try{
        const users = await UserService.listAllUsers();
        if (users.length === 0) {
            res.status(200).json({ message: 'Nenhum usuário cadastrado.' });
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar usuários.' });
    }
}

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await UserService.createUser(user);
        if (newUser) {
            res.status(201).json(newUser);
        } else {
            res.status(400).json({ message: 'Erro ao criar usuário.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Não conseguiu criar usuário.' });
    }
}
module.exports = {
    listAllUsers,
    createUser
}
