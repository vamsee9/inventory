if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhhost:3000"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
    }
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = keys.mongoURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

// Add API endpoint routes
const productRouter = require('./routes/product');


app.use('/api/products', productRouter);


// Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
})