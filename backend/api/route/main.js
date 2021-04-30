var express = require('express');
var router= express.Router();

const mainController=require('../controllers/controller');

//post 
router.post('/providers',mainController.create);
//get 
router.get('/providers', mainController.Readall);
//get 
router.get('/providers/:id', mainController.ReadOne);
//post 
router.put('/providers/:id', mainController.update);
//delete
router.delete('/providers/:id', mainController.deleteOne);
//delete
router.delete('/providers', mainController.deleteAll);

router.post('/*',noFound)
router.get('/*', noFound)
router.put('/*', noFound)
router.delete('/*', noFound)

function noFound(req,res){
    res.status(400);
    res.send('not vaild endpoint');
}

module.exports=router;

