const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title: String,
    content: String,
    type_id: String,
});

module.exports = mongoose.model('tbl_news', newSchema);