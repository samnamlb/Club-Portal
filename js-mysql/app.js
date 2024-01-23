const ejs = require('ejs');
const mysql = require('mysql');

var express = require('express');
var app = express();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Amina2009!',
    database: 'club_portal',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.set('view engine', 'ejs');

app.use("/public", express.static(__dirname + "/views/public"));

app.get('/', function(req, res) {
    connection.query('SELECT * FROM mchs_organizations', function(err, result) {
        if (err) throw err;
        res.render('index', { organizations : result });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});

/*
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM mchs_organizations", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

 */

/*
connection.connect((error) => {
    if(error){
        console.log('Error connecting to the MySQL Database');
        console.log(error);
        return;
    }
    console.log('Connection established successfully');

});
connection.end((error) => {
});

 */
