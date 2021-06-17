
const express = require ('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);


// app.get("*", (req, res)=>{
//     res.render("Ops Error 404, page is not available")
// });

module.exports = router;