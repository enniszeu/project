var express = require('express');
var validate = require('../validate/login');
const Post = require('.././models/post.models');

var router = express.Router()



router.get('/',validate.login, function(req, res, next){
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Err :' + err))
});

module.exports = router;