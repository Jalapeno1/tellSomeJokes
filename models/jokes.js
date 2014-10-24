/**
 * Created by Jonas on 24-10-2014.
 */
var mongoose = require('mongoose');

/** JOKES SCHEMA ** */
var SchemaJokes = new mongoose.Schema({
    joke: String,
    reference: String,
    created: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Jokes', SchemaJokes);