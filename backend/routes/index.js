const createError = require('http-errors')
const path = require('path')
const usersRouter = require('./users')

const setRouters = (app) => {
  setupHandler(app)

  app.use('/users', usersRouter)
}

const setupHandler = (app) => {
  // view engine setup
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'pug')

  // error status
  app.use(function(req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
  })
}

module.exports = setRouters