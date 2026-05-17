const ProjectServices = require('../services/ProjectServices');

const listAllProjects = async (req, res) => {
    try {
        const projects = await ProjectServices.listAllProjects();

        if (projects.length === 0) {
            res.status(200).json({ message: 'Nenhum projeto cadastrado.' });
        } else {
            res.status(200).json(projects);
        }

    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar projetos.' });
    }
}

const searchProjectById = async (req, res) => {
        try {
            const id = req.params.id;

            if (id !== undefined) {
                const project = await ProjectServices.searchProjectById(id);
                if (project) {
                    res.status(200).json(project);
                } else {
                    res.status(404).json({ message: 'Projeto não encontrado.' });
                }
            } else { res.status(400).json({ message: 'ID do projeto é obrigatório.' }); }
        } catch (error) { 
            res.status(500).json({ message: 'Erro ao pesquisar projeto.' });
         }
        
    }

 const createProject = async (req, res) => {
     try {
         const project = req.body;

         if (project) {
             const newProject = await ProjectServices.createProject(project);
             if (newProject) {
                 res.status(201).json(newProject, {message: "Projeto criado."});
             } else {
                 res.status(400).json({message: 'Projeto já existe.'});
             }
         } else {
             res.status(400).json({message: "Erro ao criar."})
         }
     } catch (error) {
         res.status(500).json({message: 'Erro na solicitação de criação: ', error});
     }
 }

const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        if(!projectId) {
            return res.status(400).json({message: "Id do projeto é obrigatório."});
        }

        const newProject = await ProjectServices.updateProject(projectId, req.body);


        if (newProject) {
            res.status(200).json({message: "Projeto atualizado."});
        } else {
            res.status(400).json({message: "Erro ao atualizar o projeto"});
        }
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar"});
    }
}

 const deleteProject = async (req, res) => {
    try {
        const ProjectId = req.params.id;

        if (ProjectId === undefined) {
            return res.status(400).json({message: "Id do projeto é obrigatório."});
        }
        const project = await ProjectServices.deleteProject(ProjectId);

        if (project) {
            res.status(200).json({message:"Projeto deletado com sucesso."});
        } else {
            res.status(400).json({message: "Erro ao deletar projeto."});
        }      
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar projeto.' });
    }
 }

module.exports = {
    listAllProjects,
    searchProjectById,
    createProject,
    updateProject,
    deleteProject
}