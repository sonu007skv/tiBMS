const express = require('express');
const path = require ('path');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const static_path = (path.join(__dirname, "../views"));

app.use(express.static(static_path));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render('index')
});


app.get("/officeTemp", (req, res)=>{
    res.render('officeTemp')
});


const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get('/', (req, res) =>{
    res.send(officeTemp)

});


// create
app.post('/insert', (request, response) => {
    const { name } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewName(name);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

// read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

// weather data read
app.get('/read_all', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

app.get('/read_all1', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all1();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

app.get('/read_all2', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all2();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

app.get('/read_all_ct', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.read_all_ct();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

// update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

app.listen(process.env.PORT, () => console.log('app is running'));