const {Router} = require('express');


const routerApp = Router();

//const productosApi = require('../controllers/products')

routerApp.get('/', (req,res) => {   

    res.sendFile('../layout/index.html',{root:__dirname})

})




module.exports = routerApp;