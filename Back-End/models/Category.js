const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    News_id: [{ type: mongoose.Types.ObjectId }]
});

module.exports = mongoose.model('tbl_categories', categorySchema);