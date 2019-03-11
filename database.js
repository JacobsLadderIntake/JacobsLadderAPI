var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "jacobsladderintaketeam.cik1yin3pif1.us-east-1.rds.amazonaws.com",
	user: "intaketeam",
	password: "IwantanA123",
	database: "intaketeam",
    debug    :  true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;