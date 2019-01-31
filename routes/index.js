var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    region: process.env.AWS_REGION,
    tbl: process.env.SIGNUP_TABLE
  });
});

module.exports = router;
