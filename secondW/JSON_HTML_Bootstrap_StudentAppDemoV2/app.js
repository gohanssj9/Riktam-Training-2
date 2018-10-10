var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');
var fs = require('fs');

var app = express();
app.use(methodOverride('_method'));
app.use(express.static(__dirname ));

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'loginTest'
});

con.connect(function(err){
	if(err) console.log("An Error occurred!")
	console.log("Connected!");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//rest api to get all results
app.get('/departments', function(req, res){
	con.query('SELECT * FROM departments', function(error, results, fields){
		if(error) console.log("Error in Get departments");
		var data = JSON.stringify(results, null, 2);
		res.json(data);
	});
});

app.post('/departments', function(req, res){
	var postData = req.body;
	con.query('INSERT INTO departments SET ?', postData, function(error, results, fields){
		if(error) console.log("An Error occurred!");
		con.query('SELECT * FROM departments WHERE id = (SELECT MAX(id) from departments)', function(error, results, fields){
			if(error) console.log("Send record error");
			var data = JSON.stringify(results, null, 2);
			res.json(data);
		});
	});
});

app.put('/departments/:id',function(req, res){
	var postData = req.body;
	con.query('UPDATE departments SET title = ?, body = ? WHERE id = ?', [postData.title, postData.body, req.params.id], function(error, results, fields){
		if(error) console.log("Error Updating records");
		res.json(postData);
	});
});

app.delete('/departments/:id', function(req, res){
	con.query('DELETE from departments WHERE id = ?', [req.params.id], function(error, results, fields){
		if(error) console.log("Error delete departments");
		res.json(req.params.id);
	});
});
// ---------------------------------------------------------------
app.get('/departments/:id/students', function(req, res){
	con.query('SELECT * FROM students WHERE department_id = ?', [req.params.id], function(error, results, fields){
		if(error) console.log("Error in Get Students");
		var data = JSON.stringify(results, null, 2);
		res.json(data);
	});
});

app.post('/students', function(req, res){
	var postData = req.body;
	con.query('INSERT INTO students SET ?', postData, function(error, results, fields){
		if(error) console.log("An Error occurred!");
		con.query('SELECT * FROM students WHERE id = (SELECT MAX(id) from students)', function(error, results, fields){
			if(error) console.log("Send record error");
			var data = JSON.stringify(results, null, 2);
			res.json(data);
		});
	});
});

app.put('/students/:id',function(req, res){
	var postData = req.body;
	con.query('UPDATE students SET name = ?, age = ? WHERE id = ?', [postData.name, postData.age, req.params.id], function(error, results, fields){
		if(error) console.log("Error Updating records");
		res.json(postData);
	});
});

app.delete('/students/:id', function(req, res){
	con.query('DELETE from students WHERE id = ?', [req.params.id], function(error, results, fields){
		if(error) console.log("Error delete students");
		res.json(req.params.id);
	});
});

app.listen(8000);
