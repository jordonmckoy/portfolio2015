var express = require('express');
var router = express.Router();


/* GET contact page. */
router.get('/', function(req, res) {
  var fromBtn = req.query.fromBtn;

  console.log('fromBtn ' + fromBtn);

  // find the origin to render page properly
  if (fromBtn === 'true') {
  	res.render('contact', {url: '/contact'});
  } else {
    res.render('contact_ext');
  }

  
});


module.exports = router;