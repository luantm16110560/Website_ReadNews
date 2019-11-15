var express = require('express');
var router = express.Router();
const User = require('../models/User');

//Create
router.post('/user/create', (req, res, next) => {
    var newUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
        isAdmin: false

    });
    newUser.save((err, user) => {
        if (err) {
            if (err.code == 11000)
                return res.json({ success: false, message: 'A user with that username already exists. ' });
            //  console.log('User da ton tai');
            else
                return res.send(err);
        }
        res.status(200).json({ user });
    })
});
//Read
router.get('/user/read', (req, res, next) => {
    User.find(function(err, users) {
        if (err) return res.send(err);

        res.json(users);
    });



});
//Update
router.put('/user/update', (req, res, next) => {
    User.findById(req.body._id, (err, user) => {
        if (err)
            res.status(500).json({ err });
        user.name = req.body.name
        user.phone = req.body.phone
        user.username = req.body.username
        user.password = req.body.password
        user.save((err, user) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ user });
        });

    });
});
//Delete
router.delete('/user/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({ _id: req.params.id }, (err, user) => {
        if (err)
            res.status(500).json({ err });

        res.status(200).json({ user });
    });
});
module.exports = router;