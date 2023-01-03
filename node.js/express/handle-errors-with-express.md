# Handle errors with Express middleware

If we want to have error middleware in place we can have the use middleware on app level to specify that we want our own error handling in place.

If we want the error handling in place it is important to specify the four arguments.

```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
 ```

 To see which are good third party middlewares we have the list at 
 https://expressjs.com/en/resources/middleware.html