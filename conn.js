/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pfinancedb"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM login_pro", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  })*/
  var http = require('http');

  http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World!');
  }).listen(8080);