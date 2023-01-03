var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello world')
})

app.get('/:id', function(req, res) {
  var id = req.params.id
  res.send(id)
})

var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})