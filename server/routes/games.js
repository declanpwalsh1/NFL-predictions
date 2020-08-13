const express = require('express');
const router = express.Router();
const TestGames = require('../models/TestGames');
const TrainGames = require('../models/TrainGames');

// router.post('/', async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//     });
//     try {
//         const savedUser = await user.save();
//         res.json(savedUser);
//     } catch(e) {
//         res.json({message: err});
//     }
// });

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

// router.post('/', (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//     });

//     user.save()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({message:err})
//         })
// });


module.exports = router;