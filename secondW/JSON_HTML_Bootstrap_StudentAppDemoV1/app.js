var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');
var fs = require('fs');

var app = express();
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/views'));

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'loginTest'
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8000);

//rest api to get all results
app.get('/student', function (req, res) {
   con.query('select * from student;', function (error, results, fields) {
	  if (error) throw error;
//	  console.log(results);
	  var data = JSON.stringify(results, null, 2);
//	  console.log(data);
	  fs.writeFileSync('views/student.json', data);
	  //console.log(__dirname + '/views');
	  res.sendFile(__dirname + '/views/index.html');
	});
});

//rest api to get a single student data
app.get('/student/:id', function (req, res) {
   console.log(req);
   con.query('select * from student where id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  //res.end(JSON.stringify(results));
	});
});

//rest api to create a new record into mysql database
app.post('/student', function (req, res) {
   var postData  = req.body;
   con.query('INSERT INTO student SET ?', postData, function (error, results, fields) {
	  if (error) throw error;
	  //res.end(JSON.stringify(results));
	  res.redirect('/student');
	});
});

//rest api to update record into mysql database
app.put('/student', function (req, res) {
   con.query('UPDATE student SET name = ?, age = ? where id = ?', [req.body.name, req.body.age, req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  //res.end(JSON.stringify(results));
	  res.redirect('/student');
	});
});

//rest api to delete record from mysql database
app.delete('/student', function (req, res) {
   //console.log(req.body);
   con.query('DELETE FROM student WHERE id=?', [req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  //res.end('Record has been deleted!');
	  res.redirect('/student');
	});
});