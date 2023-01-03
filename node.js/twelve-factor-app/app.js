// proxy requests for local and remote service to the same port
require('dotenv').config()

const path = require('path')
const express = require('express')
const proxy = require('express-http-proxy')
const baseImageUrl = process.env.BASE_IMAGE_URL

const proxyBaseImageUrl = baseImageUrl 
? proxy(baseImageUrl, {
  proxyReqPathResolver: function(req) {
    const newPath = baseImageUrl + req.path;
    console.log('proxying to: ' + newPath);
    return newPath;
  }
})
: express.static(path.join(__dirname, 'public/images'));

const app = express()

app.get('/images', (req, res) => {
  console.log('HIT')
  res.send('Hello World!')
})

app.use('/', proxyBaseImageUrl)

app.listen(8080, () => {
  console.log('listening on port 8080')
})