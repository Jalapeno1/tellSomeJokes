/**
 * Created by Jonas on 24-10-2014.
 */
var mongoose = require('mongoose');

/** JOKES SCHEMA ** */
var jokesSchema = new mongoose.Schema({
    joke: String,
    reference: String,
    created: { type: Date, default: new Date() }
});

mongoose.model( 'Joke', jokesSchema,"jokes" );

module.exports = mongoose.model('JOKES', SchemaJokes);