var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express with babel' });
  let iconSet = ["⭐", "🤖", "🍉"];
  let icon = iconSet[Math.floor(Math.random() * 3)]
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author', (req, res) => {
  let author = {
    "name": "Mirna",
    "lastname": "Sanchez",
    "twitter": "@Mirna",
    "job": "ITGAM"
  }

});

module.exports = router;
