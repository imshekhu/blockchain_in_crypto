const express = require('express');
var mysql = require('mysql2');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
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

const userRoutes = require('./src/routes/users');
const propertyBuy = require('./src/routes/property_buy')
const propertyRent = require('./src/routes/property_rent')
const  customer_end = require('./src/routes/Customer_end.js')

const { urlencoded } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendeded: false }));

// ROUTES
app.use('/user', userRoutes);
app.use('/propertyBuy', propertyBuy);
app.use('/propertyRent', propertyRent);
app.use('/customer', customer_end);


// app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const db = require("./src/database/connection");
const Role = db.role;
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
// function initial() {
//   Role.create({
//     id: 1,
//     role_name: "user"
//   });

//   Role.create({
//     id: 2,
//     role_name: "admin"
//   });
// }
// bootup

app.listen(3000);
