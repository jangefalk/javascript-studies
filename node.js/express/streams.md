# How to use streams in express

```js 
var fs = require('fs')

var inputFile = './inputFile.json'
var outputFile = './outputFile.json'

var readable = fs.createReadStream(inputFile)
var writeable = fs.createWriteStream(outputFile)

readable.pipe(writeable)


// Endpoint

app.get('/data/:username', function(req, res) {
  var username = req.params.username;
  var readable = fs.createReadStream('./users/' + username + '.json')

  // Send it back to the browser
  readable.pipe(res);
})

// using JSONStream to filter response
app.get('/data/:gender', function(req, res) {
  var gender = req.params.gender;

  var readable = fs.createReadStream('users.json')

  readable.pipe(JSONStream.parse('*', function(user) {
    if(user.gender === gender) return user;
  }))
  .pipe(JSONStream.stringify('[\n ', ',\n ', '\n]\n'))
  .pipe(res)
})

```