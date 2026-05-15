const express = require('express');
const cors = require('cors');
const database = require('./database/database');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

database.sync(() => {
    console.log('Database synced: ', process.env.DATABASE);
}).catch(error => {
    console.log(error);
});

app.listen(process.env.PORT_SERVER, () => {
    console.log('Server is running on http://localhost:3000');
});

