var express = require('express');
var router = express.Router();
const Category = require('../models/Category');
//Create
router.post('/cate/create', (req, res, next) => {
    var newCate = new Category({
        name: req.body.name
    });
    newCate.save((err, category) => {
        if (err)
            res.status(500).json({ err });
        res.status(200).json({ category });
    })
});
//Read
router.get('/cate/read', (req, res, next) => {
    Category.find({}, (err, category) => {
        if (err)
            res.status(500).json({ err });
        res.status(200).json(category);

    });
});
//Update
router.put('/cate/update', (req, res, next) => {
    Category.findById(req.body._id, (err, category) => {
        if (err)
            res.status(500).json({ err });
        category.name = req.body.name
        category.save((err, category) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ category });
        });

    });
});
//Delete
router.delete('/cate/delete/:id', (req, res, next) => {
    Category.findByIdAndRemove({ _id: req.params.id }, (err, category) => {
        if (err)
            res.status(500).json({ err });

        res.status(200).json({ category });
    });
});
module.exports = router;