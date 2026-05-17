const UserService = require('../services/UserServices');

const listAllUsers = async (req, res) => {
    try {
        const users = await UserService.listAllUsers();

        if (users.length === 0) {
            res.status(200).json({message: 'Nenhum usuário cadastrado.'});
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao listar usuários.'});
    }
}

const searchUserById = async (req, res) => {
    try {
        const id = req.params.id;

        if (id !== undefined) {
            const user = await UserService.searchUserById(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({message: 'Usuário não encontrado.'});
            }
        } else {
            res.status(400).json({message: 'ID do usuário é obrigatório.'});
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao pesquisar usuário.'});
    }
}

const createUser = async (req, res) => {
    try {
        const user = req.body;

        if (user) {
            const newUser = await UserService.createUser(user);
            if (newUser) {
                res.status(201).json(newUser, {message:"Usuário criado."});
            } else {
                res.status(400).json({message: 'Usuário já existe.'});
            }
        } else {
            res.status(400).json({message: "Erro ao criar."})
        }
    } catch (error) {
        res.status(500).json({message: 'Erro na solicitação de criação: ', error});
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if(userId === undefined) {
            res.status(400).json({message: "ID do usuário é obrigatório."});
            return;
        }

        const newUser = await UserService.updateUser(userId, req.body);

        if (newUser === 1) {
            res.status(200).json(newUser, {message: "Usuário atualizado."});
        } else {
            res.status(400).json({message: "Erro ao atualizar o usuário"});
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao atualizar'});
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if (userId === undefined) {
            res.status(400).json({message: "ID do usuário é obrigatório."});
            return;
        }

        const user = await UserService.deleteUser(userId);

        if (user) {
            res.status(200).json(user, {message:"Usuário deletado."});
        } else {
            res.status(400).json({message: "Erro ao deletar usuário"});
        }
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar"});
    }
}

module.exports = {
    listAllUsers,
    searchUserById,
    createUser,
    updateUser,
    deleteUser
}
