// modules =================================================
const express = require('express');
const path = require('path');
const app = express();

// set our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to Tutorialspoint!'));

//defining route
 app.get('/tproute',function(req, res){
res.send('This is routing for the application developed using Node and Express...') });

// app.get('/static',function(req, res){
//res.send('This is routing for the application developed using Node and Ex

// default URL for website
//app.use('/static', function(req,res){
  //  res.sendFile(path.join(__dirname+'/exp/index.html'));
    //__dirname : It will resolve to your project folder.
 // });

app.get('/static', function(req, res){
  res.sendFile(path.join(__dirname, '/exp/index.html'));
});

// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


