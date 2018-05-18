const mongoose = require('mongoose'), 
      Dojo = mongoose.model('Dojo');

const dojos = require('../controllers/dojos.js')
var path = require('path');

module.exports = function(app){

    //  root
    app.get('/dojos', function(req, res){
        dojos.index(req, res);
    });

    // create
    app.post('/dojo/', function(req, res){
        console.log("I am at routes.js - create");
        dojos.create(req, res);
    });

    // // show
    // app.get('/task/:id/', function(req, res){
    //     tasks.show(req, res);
    // });

    // // remove
    // app.delete('/task/:id', function(req, res){
    //     tasks.remove(req, res);
    // });

     // update
     app.put('/dojo/', function(req, res){
        console.log("I am at routes.js - update");
        dojos.update(req, res);
    });

    // this route will be triggered if any of the routes above did not match
    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./myAngularApi/dist/myAngularApi/index.html"))
    // });

}        