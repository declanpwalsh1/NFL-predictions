const mongoose = require('mongoose');

const TestGamesSchema = mongoose.Schema({});


module.exports = mongoose.model('TestGames', TestGamesSchema, 'TestGames');