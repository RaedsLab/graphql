import express from  'express'

let router = express.Router();

/** Your code goes here **/

/** End **/

/* GET home page */
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
