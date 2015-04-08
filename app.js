var express = require('express');
var app = express();

// app.get('/', function(request, response) {
// 	// Line 6 is the same as lines 8 & 9
// 	response.send('Hello World'); // Express API
// 	// Lines 8 & 9 are the same as line 6
// 	response.write('Hello World'); // 1/2 Node API
// 	response.end(); // 2/2 Node API
// });

app.get('/blocks', function(request, response) {
	// var blocks = ['Fixed', 'Movable', 'Rotating'];
	// // response.send(blocks);
	// response.json(blocks); // for objects & arrays this functions the same as the send() function

	// // What is passing a string to send() function? 
	// var blocks = "<ul><li>Fixed</li><li>Movable</li></ul>";
	// response.send(blocks);
	// // Responding with straight HTML from a route 
	// // Server side rending look into EJS & Jade

	// // What if move existing route to new location? use response.redirect() passing in destination path as an argument
	// response.redirect('/parts');
	
	// What is move existin route to a new route PERMANENTLY? 
	response.redirect(301, '/parts');
});

app.listen(3000);