# Beginner Node express app

The order of the routes are important in express node app. Look at the following. The second route will not be hit because of the id in the first path. If we want the second one to hit we can just delegate it with the next method that will just go onto the next in the pipeline.

```js 
app.get('/:id', function(req, res) {
  var id = req.params.id
  res.send(id)
})

app.get('/big.*/', function(req, res) {
  var id = req.params.id
  res.send(id)
})

app.get('/big.*/', function(req, res, next) {
  console.log('HIT')
  next();
})

```