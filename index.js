const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Home is running!')
});

// Database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'firstcvpage'
});

connection.connect( error => {
    if (error) throw error;
    console.log("Database connected");
});

// Server is listening
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});