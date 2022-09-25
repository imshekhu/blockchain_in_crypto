const express = require('express');
var mysql = require('mysql2');
const app = express();
require('dotenv/config')

// DB connection
require('./src/database/connection');



var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// Import Routes
const postsRoutes = require('./src/routes/posts');

app.use('/posts', postsRoutes);


// Middlewares
// app.use('/posts', () =>{
//     return console.log('Hello This is middleware');
// });

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/posts', (req, res) => {
    res.send('Posts World!')
});


// bootup

app.listen(3000);
