const express = require ('express');
const path = require('path');
const mysql = require("mysql");
const app = express();
const dotenv = require('dotenv');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bmsdata = require('../controllers/bmsdata')



dotenv.config({path: './.env'});
const port = process.env.PORT || 8000;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

Service = require('../routes/dbService');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log(`connected to database . . .`)
    }
});
// MEETING ROOM Temprature
app.get('/read_all1', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all1();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});

app.get('/read_all', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});

app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})


module.exports = bmsdata;