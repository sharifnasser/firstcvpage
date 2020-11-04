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
    res.send('Home is running!');
});

app.get('/bio', (req, res) => {
    res.send('Bio is running!');
});

app.get('/education', (req, res) => {
    res.send('Education is running!');
});

app.get('/experience', (req, res) => {
    res.send('Experience is running!');
});

app.get('/speaking', (req, res) => {
    res.send('Speaking is running!');
});

// Database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'firstcvpage'
});

connection.connect( function(err) {
    if (err) throw err;
    console.log("Database connected");
});

// Server is listening
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});