const express = require('express');
const router = express.Router();
const User = require('../models/Users');

//GETS ALL USER
router.get('/', async (req, res) => {

    //tries to find all users asynchronously, catches fails
    try {
        const user = await User.find();
        res.json(user);
    } catch(err) {
        res.json({message: err});
    }
});

router.get('/user', async (req, res) =>{
    try {
        const user = await User.findOne({email: req.body.email});
        res.json(user);
    } catch (error) {
        res.json({message: error});
    }  
});

//SUBMITS A USER DEPRECATED
//DONT USE THIS TO SUBMIT USERS, USE auth.js
router.post('/', async (req, res) => {
    //constructs User document from body
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    
    // tries to save user, catches errors
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err) {
        res.json({message: err});
    }

});


//Get specific User
router.get('/:username&:password', async (req, res) => {
    //tries to find user by param id, catches fails
    // try {
    //     const user1 = await User.findById(req.params.postId);
    //     res.json(user1);
    // } catch(err) {
    //     res.json({message:err});
    // }
    console.log(`username:${req.params.username} and password:${req.params.password}`);
});



module.exports = router;