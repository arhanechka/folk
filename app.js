
var express = require('express');
var app = express();
const router = require('./routes');
const dispatcher = require('./dispatcher');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) 
dispatcher(app);

app.use('/', router)

// app.get('/test/:id', (req, res)=>{
//     let id = req.param.id;
//     res.send({test1: 'test1'+id})
// });

// app.all('*', (req,res) =>{
//     res.send('<h1>Hellouysche!</h1>')
// });

app.listen(8080, ()=> console.log("Server created, port 8080"))