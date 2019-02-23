const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view enginer','hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    next();
})

app.use((req,res,next) => {
    req.render('maintainence')
})

app.get('/',(req,res) => {
    res.send('Welcome Lokesh!');
});

app.get('/about',(req,res) => {
    res.render('about.hbs');
});

app.listen(3000);