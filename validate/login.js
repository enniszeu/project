


// module.exports.getlogin = function(req, res, next){
//     res.cookie('tuan', 'cookievalue');
//     console.log("start get")
//     next();
// };

module.exports.login = function(req, res, next){
    var errors = [];
    const email = req.body.email;
    const password = req.body.password;
    const form  = {
        email : "enniszeu@gmail.com",
        password : "01695419337"
    }

    res.cookie('user', form);    

    console.log(email)
    console.log(JSON.parse(JSON.stringify(req.cookies)))
    
    if (!req.cookies.user) {
        res.redirect('/login');
        return;
    }

    next();
};