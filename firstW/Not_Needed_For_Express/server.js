// var http = require('http');


// http.createServer(function (request, response){
// 	console.log("User" +request.url);
// 	response.writeHead(200, {"Context-Type": "text/plain"});
// 	response.write("Response");
// 	response.end();
// }).listen(8000);

// console.log("Server is running..."); Video 13

// var http = require('http');
// var fs = require('fs');

// //404 response
// function sendError(res){
// 	res.writeHead(404, {"Context-Type": "text-plain"});
// 	res.write("Error 404 not found");
// 	res.end();
// }

// //Handle User Request
// http.createServer(function (request, response){
// 	if(request.method == 'GET' && request.url == '/'){
// 		response.writeHead(200, {"Context-Type" : "text/html"});
// 		fs.createReadStream("./index.html").pipe(response);
// 	}
// 	else{
// 		sendError(response);
// 	}
// }).listen(8000);

// console.log("Server is running..."); Video 14
/*
var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(req, res, next){
	console.log("Bacon");
	next();
}
function doSecond(req, res, next){
	console.log("Tuna");
	next();
}

app.use(doFirst); //Code inside this is called middleware, to handle user requests
app.use(doSecond);
 
// The next keyword searches for the next function in the stack, 
//hence goes to doSecond, else it always stays at doFirst without going back
http.createServer(app).listen(8000);
console.log("Server is running...");
Video 15
*/

var connect = require('connect');
var http = require('http');

var app = connect();

function profile(req, res){
	console.log("User requested");
}

function forum(req, res){
	console.log("Forum");
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8000);
console.log("Server is running...");