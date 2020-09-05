const router = require('express').Router();
//controllers
const authCtrl = require('../controllers/authCtrl');

//signup
router.get('/signup', authCtrl.signup_get);
//login
router.get('/login', authCtrl.login_get);
//singup-post
router.post('/signup', authCtrl.signup_post);
// login-post
router.post('/login', authCtrl.login_post);
//logout
router.get('/logout', authCtrl.logout_get);
module.exports = router;
