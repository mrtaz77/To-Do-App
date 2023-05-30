var express = require('express')
var todoController = require('./controller/todoController')
var app = express()

//set up template engine
app.set('view engine','ejs')

// static files

app.use('/assets',express.static('./public'))

//fire controllers
todoController(app)

//listen to port
app.listen(3111)
console.log('listening on 3111')

