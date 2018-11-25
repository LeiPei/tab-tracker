const AuthenticationController = require('./controllers/AuthenticationController')

// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// AuthenticationControllerPolicy.register
module.exports = (app) => {
  // use express middleware
  app.post('/register', AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
}
