const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// crear el server de express
const app = express();

// db
dbConnection();

// CORS
app.use(cors());

// directorio público
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// rutas
app.use('/api/auth', require('./routes/authRoute'));  // disponibiliza: './routes/auth' -  en la ruta: '/api/auth'
app.use('/api/events', require('./routes/eventsRoute'));  // disponibiliza: './routes/events' -  en la ruta: '/api/events'
app.use('/login', express.static('public'));

// TODO: CRUD eventos

// escuchar las peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}...`);
})

