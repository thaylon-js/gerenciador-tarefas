const ProjectModel = require('../models/ProjectModel');
const UserModel = require('../models/UserModel');

async function listAllProjects() {
    return await ProjectModel
        .findAll({  
            order: [['createdAt', 'DESC']],
        })
        .catch((error) => {
            console.error('Erro ao listar projetos:', error);
        });
}

async function searchProjectById(id) {
    return await ProjectModel
        .findByPk(id)
        .catch((error) => {
            console.error('Erro ao buscar projeto por ID:', error);
        });
}

async function createProject(projectData) {
    const existingProject = await ProjectModel.findOne({
        where: { name: projectData.name }
    });

    if(existingProject !== 0){
        return null
    }

    return await UserModel
        .create(projectData)
        .catch(error => {
            console.error('Erro ao criar projeto:', error);
        });

    }
    

async function updateProject(id, projectData) {
    const existingProject = await ProjectModel.findOne({ where: { id: id } });

    if(extingProject === 0) {
        return null;
    }
 

    const projectEffect = await ProjectModel
        .update(projectData, {
            where: { id: id }
        })
        .catch(error => {
            console.error('Erro ao atualizar projeto:', error);
        });
        if (projectEffect === 0) {
            return null;
        }
}

async function deleteProject(id) {
 const ProjectEffect = await ProjectModel
        .destroy({
            where: { id: id }
        })
        .catch(error => {
            console.error('Erro ao excluir projeto:', error);
        });

        if (ProjectEffect === 0) {
            return null;
        }  
}
module.exports = {
    createProject,
    searchProjectById,
    updateProject,
    deleteProject,
    listAllProjects
}