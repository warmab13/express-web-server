const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middleware Serve static content

app.use( express.static('public') );

app.get('/', (req, res)=>{
    res.render('home', {
        name: 'Alonso',
        title: 'Node Workshop'
    });
})

app.get('/portfolio', (req, res)=>{
    res.render('portfolio');
})

app.get('/about', (req, res)=>{
    res.render('about');
})

app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo en su respectiva ruta');
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})