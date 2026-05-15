const UserModel = require('../models/UserModel');

async function listAllUsers() {
    let listUsers = [];
    await UserModel
        .findAll({ order: [['createdAt', 'DESC']] })
        .then(users => {
            listUsers = users;
        })
        .catch(error => {
            console.error('Erro ao listar usuários:', error);
        });
    return listUsers;

}

async function searchUserById(id){
    let user = {};
    await UserModel
        .findOne({ 
            where: {id: id}
        })   
        .then(result=>{
            user = result;
        })
        .catch(error=>{
            console.error('Erro ao buscar usuário por ID:', error);
        });
    return user;
}

async function createUser(user){ 
    await UserModel
        .create(user)
        .then(result => {
            newUser = result;
        })
        .catch(error => {
            console.error('Erro ao criar usuário:', error);
        });
}

async function updateUser(id, username, password, email, role){
    const userEffect = await UserModel
        .update({
            username: username,
            password: password,
            email: email,
            role: role
        }, {
            where: { id: id }
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error);
        });

        if (userEffect === 0) {
            return null;
        }
        return await searchUserById(id);
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
    listAllUsers,
    createUser,
    updateUser,
    deleteUser
}   