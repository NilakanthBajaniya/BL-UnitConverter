var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  
    const username = req.body.username;
    const password = req.body.password;

    console.log(req.body)

    //res.status(200).send(req)
    if(username != undefined && password != undefined)
      res.status(200).json({username})
    else
      res.status(400).json(req.body)  
});

module.exports = router;
