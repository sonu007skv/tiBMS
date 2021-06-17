const express = require ('express');
const path = require('path');
const mysql = require("mysql");
const app = express();
const dotenv = require('dotenv');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const cors = require('cors');



dotenv.config({path: './.env'});
const port = process.env.PORT || 8000;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const partials_path = (path.join(__dirname, "./views/partials"));

const dbService = require('./routes/dbService');
const bmsdata = require('./controllers/bmsdata');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));




const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cookieParser());


app.set('view engine', 'hbs');

hbs.registerPartials(partials_path);

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
    // console.log(result)
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});
//office area temprature
app.get('/read_all', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all();
    // console.log(result)
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});
//server room temprature
app.get('/read_all2', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all2();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})
//Cooling Tower Parameters
app.get('/read_all_ct', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all_ct();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})


//define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));





app.listen(port, ()=>{
    console.log(`listening on the the port ${port}`)
});
