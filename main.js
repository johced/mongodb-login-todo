const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();

require('dotenv').config();

// *** Log request ***
app.use(morgan('tiny'));

// *** MongoDB connection ***
connectDB();

// *** Adds the form to our body property of the request ***
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// *** Local port ***
const PORT = process.env.PORT || 8080;

// *** Set view engine ***
app.set('view engine', 'ejs');

// *** Session ***
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

// *** Flash ***
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  next();
});

// *** load assets ***
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));

// *** Load routes ***
app.use('/', require('./server/routes/homeRoute'));
app.use('/', require('./server/routes/loginRoute'));
app.use('/', require('./server/routes/todoRoute'));

// *** Create local server ****
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
