const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')
const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.json());

//import routes
const usersRoute = require('./routes/users');
const gamesRoute = require('./routes/games');
const authRoute  = require('./routes/auth');
const postRoute  = require('./routes/posts');

//middlewares
app.use(cors());
app.use('/users', usersRoute);
app.use('/games', gamesRoute);
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute); 


//APP LISTENER
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db')
);