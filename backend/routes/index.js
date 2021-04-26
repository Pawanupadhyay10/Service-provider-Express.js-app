var express = require('express');
var router = express.Router();
var mainController=require('../controllers/main');

/* GET home page. */
router.get('/',mainController.home);
router.get('/login', mainController.login); 
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/registor', mainController.registor);
    
module.exports = router;
