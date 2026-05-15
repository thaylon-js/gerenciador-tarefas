const express = require('express');
const cors = require('cors');
require('dotenv').config();

const database = require('./database/database'); 
const User = require('./models/UserModel'); 

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

database.sync({ force: false })
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso!');
        
        const port = process.env.PORT_SERVER || 3000;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });