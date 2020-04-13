const UserController = require('../controllers/user');

module.exports = (router) => {
  router.route('/signup')
    .post(UserController.signUp);

  router.route('/signin')
    .post(UserController.signIn);
};