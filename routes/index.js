var express = require('express');
var path=require("path")
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("<h2>hello this is express developes by sriya<h2>");
  res.sendFile(path.resolve("public/index.html"));

});


router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("<h2>hello this is express developes by sriya<h2>");
  res.sendFile(path.resolve("public/login.html"));

});

router.get('/signup', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("<h2>hello this is express developes by sriya<h2>");
  res.sendFile(path.resolve("public/signup.html"));

});

router.get('/contactus', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("<h2>hello this is express developes by sriya<h2>");
  res.sendFile(path.resolve("public/contactus.html"));

});

router.get('/form', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("<h2>hello this is express developes by sriya<h2>");
  res.sendFile(path.resolve("public/form.html"));

});

router.post('/formdata', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 var username=req.body.username
 var female=req.body.female
  var output="<table border=1><tr><td>Username<td>"+username+"<tr><td>Gender<td>"+female;
  res.send(output)
 });

module.exports = router;

module.exports = router;
