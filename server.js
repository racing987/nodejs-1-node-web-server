const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

app.set('view enginer','hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));


app.get('/',(req,res) => {
    res.send('Welcome Lokesh!');
});

app.get('/about',(req,res) => {
    res.render('about.hbs');
});

app.listen(port,()=>{
    console.log('server up and running',port);
});