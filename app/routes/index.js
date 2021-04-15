var express = require('express');
var router = express.Router();
const converterController = require('../controller/converterController')



// /* GET home page. */
router.get('/', converterController.convert);

module.exports = router;
