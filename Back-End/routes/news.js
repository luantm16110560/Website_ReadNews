var express = require('express');
var router = express.Router();
const News = require('../models/News');
const Category = require('../models/Category');
//Create
router.post('/news/create', (req, res, next) => {
    var newNew = new News({
        title: req.body.title,
        content: req.body.content,
        type_id: req.body.type_id
    });
    newNew.save((err, news) => {
        if (err)
            res.status(500).json({ err });
        res.status(200).json({ news });
    })
});
//Read
router.get('/news/read', (req, res, next) => {
    News.find({}, (err, news) => {
        if (err)
            res.status(500).json({ err });
        res.status(200).json(news);

    });
});
//Find by cate
router.get('/news/read_cate/:select', (req, res, next) => {
    News.find({ type_id: req.params.select }, (err, news) => {
        if (err)
            res.status(500).json({ err });
        res.status(200).json(news);

    });
    // console.log(req.params.select)
    // res.status(200).json({ status: true })
});

// //Update
router.put('/news/update', (req, res, next) => {
    News.findById(req.body._id, (err, news) => {
        if (err)
            res.status(500).json({ err });
        news.title = req.body.title
        news.content = req.body.content
        news.type_id = req.body.select
        news.save((err, news) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ news });
        });

    });
});
//Delete
router.delete('/news/delete/:id', (req, res, next) => {
    News.findByIdAndRemove({ _id: req.params.id }, (err, news) => {
        if (err)
            res.status(500).json({ err });

        res.status(200).json({ news });
    });
    //http://localhost:3000/news/delete/5df3acf3ddec1f02dcf3432c
});
module.exports = router;