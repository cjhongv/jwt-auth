const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const {requireAuth, checkUser} = require('./middleware/authMiddleware');
const app = express();

const uri = 'mongodb+srv://cjhongv:cjhongv@cluster0.usxjf.mongodb.net/node-auth?retryWrites=true&w=majority';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, })
  .then(result => app.listen('3000'))
  .catch(err => console.log(err))

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());


// routes
app.get('*', checkUser);//  '*' will apply to all routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoute);