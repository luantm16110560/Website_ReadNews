var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
//user schema
var userSchema = new Schema({
    name: String,
    phone: String,
    username: String,
    password: String
});
//hash the password before the user is saved
userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});
// userSchema.methods.comparePassword = function(password) {
//     bcrypt.compare('somePassword', hash, function(err, res) {
//         if (res) {
//             return true
//         } else {
//             return false;
//         }
//     });
//     var user = this;
//     return bcrypt.compareSync(password, user.password);
// };

module.exports = mongoose.model('tbl_users', userSchema);