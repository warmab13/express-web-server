const express = require('express');
const app = express();
const port = 8080;
//TODO: const hbs = require('hbs')

app.set('view engine', 'hbs');

//Middleware Serve static content

app.use( express.static('public') );

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

app.get('/portfolio', (req, res)=>{
    res.sendFile(__dirname + '/public/portfolio.html');
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/public/about.html');
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