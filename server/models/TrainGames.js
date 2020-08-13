const mongoose = require('mongoose');

const TrainGamesSchema = mongoose.Schema({});

module.exports = mongoose.model('TrainGames', TrainGamesSchema, 'TrainGames');