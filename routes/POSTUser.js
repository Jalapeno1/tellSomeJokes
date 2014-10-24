/**
 * Created by Jonas on 24-10-2014.
 */
var express = require('express');
var router = express.Router();

var Users = require("../models/user");

var Route = router.route('/user/:username/:email/:pw');

Route.post(function(req, res){
    var newUser = new Users();

    newUser.username = req.params.username;
    newUser.email = req.params.email;
    newUser.pw = req.params.pw;

    newUser.save(function(err){
        if(err)
            res.send(err);

        res.json({message: 'User has been added!', data: newUser});
    })
});

module.exports = router;
