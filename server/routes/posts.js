const router = require('express').Router();
const Users = require('../models/Users');
const verify = require('./verifyToken');
const User = require('../models/Users'); 

router.get('/', verify,(req, res) => {
    res.send(req.user);
    Users.findById({_id: req.user});
})

module.exports = router;