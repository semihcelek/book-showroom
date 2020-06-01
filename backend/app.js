const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const session = require('express-session')
const ensureLogin = require('./middleware/ensure-login')

const UserModel = require('./models/user-model')
const authorRouter = require('./routes/author')
const bookRouter = require('./routes/book')
const novelRouter = require('./routes/novel')
const authRouter= require('./routes/auth')
const cors = require('cors')


require('./mongodb-connection')

const app = express()
app.use(cors())

passport.serializeUser(UserModel.serializeUser())
passport.deserializeUser(UserModel.deserializeUser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({secret:'booking', resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(UserModel.createStrategy())

app.use(cookieParser())
app.set('view engine', 'pug')


app.use('/author', authorRouter) 
app.use('/book', bookRouter)
app.use('/novel', novelRouter)
app.use('/auth', authRouter)



app.get('/', ensureLogin, (req, res) => {
    res.render('index', { username: req.user.username})
})

module.exports = app