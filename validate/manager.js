


//home post
module.exports.manager =  function(req, res, next){
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Err :' + err))
        
}