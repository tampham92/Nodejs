const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const session = require('express-session');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

//Connect to db
db.connect()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(methodOverride('_method'))

//HTTP logger
app.use(morgan('combined'))
app.use(cookieParser())
app.use(
  session({
      secret: 'mk',
      resave: true,
      saveUninitialized: false,
      maxAge: 5 * 60 * 60 * 1000
  }),
);

//Creat Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Routes init: lấy ra từ routes/index.js
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})