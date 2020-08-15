const express = require('express');
const router = express.Router();
const TestGames = require('../models/TestGames');
const TrainGames = require('../models/TrainGames');

//test getter
router.get('/', async (req, res) => {
    try {
        const user = await TestGames.find().limit(5);
        res.json(user);
    } catch(err) {
        res.json({message: err});
    }
});


//specific game query with req.body
router.post('/', async (req, res) => {
    try {
        const games = await TrainGames.find(req.body);
        res.json(games);
    } catch(err) {
     res.json({message: err});
    }
})


// specific game criteria
router.get('/:hometeam&:awayteam', async (req, res) => {
    try {
        // const game1 = await TestGames.find({home_team: `${req.params.hometeam}`, away_team: `${req.params.awayteam}`});
        const game1 = await TestGames.find({home_team: req.params.hometeam, away_team: req.params.awayteam});
        
        // const game1 = await TestGames.find({home_team: "Philadelphia Eagles", away_team: "Atlanta Falcons"});
        
        res.json(game1)
    } catch(err) {
        res.json({message: err});
    }
    console.log(`hometeam: ${req.params.hometeam} awayteam:${req.params.awayteam}`);
})

module.exports = router;