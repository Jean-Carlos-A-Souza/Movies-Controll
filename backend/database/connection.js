const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movie_controll'
})

module.exports = Connection;
