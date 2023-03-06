var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    jsonData = req.data;
    //console.log(jsonData);
    res.render('rickAndMorty', { title:'Rick and Morty Characters', data:jsonData});
});

module.exports = router;
