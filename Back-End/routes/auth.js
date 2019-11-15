var express = require('express');
var router = express.Router();
const User = require('../models/User');
var jwt = require('jsonwebtoken');
var superSecret = 'iloveyousomuch';
//Create
router.post('/authenticate', function(req, res) {
    User.findOne({
        username: req.body.username
    }).select('name username password').exec(function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                mesage: 'Authentication failded. User not found.'
            });
        } else if (user) {
            var validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({
                    success: false,
                    mesage: 'Authentication failed. Wrong password.'
                });
            } else {
                var token = jwt.sign({
                    name: user.name,
                    username: user.username
                }, superSecret, {
                    expiresIn: '24h'
                });
                res.json({
                    success: true,
                    mesage: 'User da duoc cap phat token',
                    token: token
                });
            }
        }
    });
});

module.exports = router;