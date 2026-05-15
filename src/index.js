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
}).then(r => {
    console.log('Database synced: ', r);
})

app.listen(process.env.PORT_SERVER, () => {
    console.log('Server is running on http://localhost:3000');
});

