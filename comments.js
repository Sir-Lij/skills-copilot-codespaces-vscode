// Create web server application with Express
// Start server: node comments.js
// Test in browser: http://localhost:3000/comments

// Import modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Configure body-parser to read request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Store comments in array
var comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Jane', message: 'Hi' },
  { name: 'Joe', message: 'Hey' }
];

// Serve static page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/comments.html');
});

// Get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000);
console.log('Server is running at http://localhost:3000');