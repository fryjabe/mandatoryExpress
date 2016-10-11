var express= require('express');
var app= express();

app.locals.about= require('./about.json')

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index', {
    "title": "Home",
    "subtitle": "Home Page for the Mandatory Assignment",
    "text": "Some text !! :)"
})
});
app.get('/about', function(req,res){
	res.render('index', app.locals.about);
});



var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
})