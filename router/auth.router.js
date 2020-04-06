var express = require('express');
var validate = require('../validate/login');

var router = express.Router()



router.post('/', validate.login);
// router.get('/getlogin', validate.getlogin);
router.get('/', function(req, res, next){
	res.json("sai mat khau")
});
module.exports = router;