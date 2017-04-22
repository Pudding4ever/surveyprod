/** http://stackoverflow.com/a/14015883/1015046 **/
var bcrypt = require('bcrypt');

module.exports.cryptPassword = function (password, callback) {
return callback(null, bcrypt.hashSync(password, bcrypt.genSaltSync()));
};

module.exports.comparePasswords = function (password, userPassword, callback) {	
return callback(null, bcrypt.compareSync(password, userPassword));
};