const mongoose = require('mongoose'),
Dojo = mongoose.model('Dojo');

module.exports = 
{
    index: function(req, res){
        Dojo.find({}, function(err, dojos){
            if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
            }
            else {
            res.json({message: " Show all, Success", data: dojos})
            }
        })
    },

    create: function(req, res){
        var dojo = new Dojo();
        console.log(req.body); // for using the submit form, we use req.body not req.params
        dojo.name = req.body.name;
        dojo.image_url = req.body.image_url;

        dojo.save(function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else
            {
                res.json({message:"New Dojo added" ,data: dojo});
            }
        })
    },

    // show: function(req, res){
    //     console.log('req.parmas', req.params);
    //     Task.findOne({_id: req.params.id}, function(err, data){
    //         if(err){
    //             console.log("Got an error", err.message);
    //             res.json({message: "Error", error: err});
    //         } else if(!data) {
    //             res.json({message: "MongoDB could not find one."});
    //         }
    //         else {
    //             res.json({message:"Success", info:data});
    //         }
    //     })
    // },

    // remove: function(req, res){
    //     // console.log('req.parmas', req.params);
    //     Task.remove({_id: req.params.id}, function(err, data){
    //         if(err){
    //             console.log("Got an error", err.message);
    //             res.json({message: "Error", error: err});
    //         } else {
    //             res.json({message:"Success", info:data});
    //         }
    //     })
    // },
    
    update: function(req, res){
        console.log('req.body', req.body);
        Dojo.findOne({_id: req.body.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            } else {
                data.rating = req.body.rating;
                data.comment = req.body.comment;
                data.save(function(err){
                    if(err){
                        console.log("Got an error", err.message);
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message:"Success", info:data});
                    }
                })
            }
        })
    },
}

