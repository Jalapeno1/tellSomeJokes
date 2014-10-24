/**
 * Created by Jonas on 24-10-2014.
 */
var express = require('express');
var router = express.Router();

var Jokes = require("../models/jokes");

router.get(function(req, res) {
    Jokes.find(function(err, jokes) {
        if (err)
            res.send(err);

        res.json(jokes);
    });
});