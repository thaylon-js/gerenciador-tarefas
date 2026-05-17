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
        where: {
            name: projectData.name,
        }
    });

    if (existingProject) {
        return null;
    }

    return await ProjectModel
        .create(projectData)
        .catch(error => {
            console.error('Erro ao criar projeto:', error);
        });
}


async function updateProject(id, projectData) {
    const existingProject = await ProjectModel.findOne({where: {id: id}});

    if (!existingProject) {
        return null;
    }


    return await ProjectModel
        .update(projectData, {
            where: {id: id}
        })
        .catch(error => {
            console.error('Erro ao atualizar projeto:', error);
        });
}

async function deleteProject(id) {
    const existingProject = await ProjectModel.findOne({where: {id: id}});

    if (!existingProject) {
        return null;
    }

    return await ProjectModel
        .destroy({
            where: {id: id}
        })
        .catch(error => {
            console.error('Erro ao excluir projeto:', error);
        });
}

module.exports = {
    createProject,
    searchProjectById,
    updateProject,
    deleteProject,
    listAllProjects
}