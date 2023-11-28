// create web server
// create server
const express = require('express');
const app = express();
// create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));
// create a route
app.get('/api/comments', (req, res) => {
    // res.send('Hello World');
    res.send([1, 2, 3]);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.params);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});
// create a route
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send('Hello World');
    res.send(req.query);
});