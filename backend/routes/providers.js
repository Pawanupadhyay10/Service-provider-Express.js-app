var express = require('express');
var router = express.Router();
var providerController = require('../controllers/providers');

/* GET list page. */
router.get('/', providerController.list);
/* GET Detail page. */
router.get('/details/:id', providerController.details);
/* GET edit page. */
router.get('/edit/:id', providerController.edit);
/* GET update page. */
router.post('/update/:id', providerController.update);
/* POST add page. */
router.get('/provider-add-form', providerController.addform);
/* GET add page. */
router.post('/add', providerController.add);
/* GET list page. */
router.get('/delete/:id', providerController.delete);

module.exports = router;