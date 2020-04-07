const express = require("express");
const app = express();
var port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const Post = require('./models/post.models');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
var cookieParser = require('cookie-parser')
const fileUpload = require("express-fileupload")
 

app.use(cookieParser())


const uri = process.env.MONGO_URL
mongoose.connect(uri ,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


app.use(express.static('puclic'));
app.use(cors())

app.use(fileUpload());

app.use(bodyParser.json({limit: '10000kb'}));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var routerAuth = require('./router/auth.router');
var routerManager = require('./router/manager.router');


// app.use('/login', routerAuth);
// app.use('/manager', routerManager);



app.get('/', function(req, res){
    // var page = parseInt(req.query.page) || 1;
    // var perPage = 3;

    // var start = (page - 1) * perPage;
    // var end = page * perPage;
    
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Err :' + err))
})

app.get('/manager', function(req, res, next){
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Err :' + err))
});

//create
 
app.post('/upload', function(req, res){
    // const name = req.body.name;
    // const imgeFile = req.body.imgeFile;
    // const conten = req.body.conten;
    // const textAria = req.body.textAria;
    // const date = req.body.date;
    // const url = req.body.url;
    // const imageName = req.body.imageName;

    // const newUser = new Post({name,conten,date,textAria,url,imageName})
    // console.log(newUser)
    // newUser.save()
    //     .then(() => res.json('User add'))
    //     .catch(err => res.status(400).json('Err: ' + err));
    const file = req.files.file

    file.mv(`${__dirname}/client/public/upload/${file.name}`)

    const imageName = file.name
    const filePath= `/upload/${file.name}`

    const newUser = new Post({filePath, imageName})
    console.log(newUser)

    newUser.save()
        .then(() => res.json('User add'))
        .catch(err => res.status(400).json('Err: ' + err));
})



app.post('/create', function(req, res){
    
    const name = req.body.name;
    const imgeFile = req.body.imgeFile;
    const conten = req.body.conten;
    const textAria = req.body.textAria;
    const date = req.body.date;
    const url = req.body.url;
    const imageName = req.body.imageName;

    const newUser = new Post({name,conten,date,textAria,url,imageName})
    console.log(newUser)
    newUser.save()
        .then(() => res.json('User add'))
        .catch(err => res.status(400).json('Err: ' + err));

});

app.get('/post/:id', function(req, res){
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Err :' + err))
})
//delete
app.get('/delete/:id', function(req, res){
    Post.findByIdAndDelete(req.params.id)
        .then(posts => res.json("delete id"))
        .catch(err => res.status(400).json('Err :' + err))
})
//upload lollllllllllllllllllllllllll
app.post('/upload/:id', function(req, res){
    Post.findById(req.params.id)
        .then(posts => {
            posts.name = req.body.name;
            posts.conten = req.body.conten;

            posts.save()
                .then(() => res.json('User upload'))
                .catch(err => res.status(400).json('Err: ' + err));
        })
        .catch(err => res.status(400).json('Err: ' + err));
})





app.listen(port, function(){
    console.log("hey,babe tuan" + port)
});