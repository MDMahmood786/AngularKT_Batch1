/**
 * http://usejsdoc.org/
 */

var express=require('express');
var router = express.Router();

router.get('/', function(req, res) {
	
	// load all products...
	var products=[{name:'Laptop'},{name:'Mobile'}];
	res.json(products);
	
});


module.exports=router;