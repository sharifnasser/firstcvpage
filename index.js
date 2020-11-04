const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const app = express();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Server is listening
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});