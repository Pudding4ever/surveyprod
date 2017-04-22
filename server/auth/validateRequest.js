//Sourced from tutorial at http://thejackalofjavascript.com/an-end-to-end-hybrid-app/
//Ensures that requests are being made by an authenticated user

var isEmailValid = function (db, email, callback) {
db.appUsers.findOne({
email: email
}, function (err, user) {
callback(user);
});
};
module.exports.validate = function (req, res, db, callback) {
// if the request dosent have a header with email, reject the request
if (!req.params.token) {
res.writeHead(403, {
'Content-Type': 'application/json; charset=utf-8'
});
res.end(JSON.stringify({
error: "ACCESS DENIED",
message: "An Email is required as part of the header"
}));
};
isEmailValid(db, req.params.token, function (user) {
if (!user) {
res.writeHead(403, {
'Content-Type': 'application/json; charset=utf-8'
});
res.end(JSON.stringify({
error: "ACCESS DENIED",
message: "Invalid User Email"
}));
} else {
callback();
}
});
};