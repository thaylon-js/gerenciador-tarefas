const UserModel = require('../models/UserModel');

async function listAllUsers() {
    return await UserModel
        .findAll({
            order: [['createdAt', 'DESC']],
        })
        .catch((error) => {
            console.error('Erro ao listar usuários:', error);
        });
}

async function searchUserById(id){
    return await UserModel
        .findByPk(id)
        .catch((error) => {
            console.error('Erro ao buscar usuário por ID:', error);
        });
}

async function createUser(user){
    const existingUser = await UserModel.findOne({
        where: { username: user.username }
    });

    if(existingUser !== 0){
        return null
    }

    return await UserModel
        .create(user)
        .catch(error => {
            console.error('Erro ao criar usuário:', error);
        });
}

async function updateUser(id, user){
    const existingUser = await UserModel.findByPk(id);

    console.log(existingUser);

    if(existingUser === null){
        return null;
    }

    const userEffect = await UserModel
        .update(user, {
            where: { id: id }
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error);
        });

        if (userEffect === 0) {
            return null;
        }

        return userEffect;
}

async function deleteUser(idUser){
    const userEffect = await UserModel
        .destroy({
            where: { id: idUser}
            })
               .catch(error => {
            console.error('Erro ao deletar usuário:', error);
        });

        if (userEffect === 0) {
            return null;
        }

        return userEffect;
}

module.exports = {
    searchUserById,
    listAllUsers,
    searchUserById,
    createUser,
    updateUser,
    deleteUser
}