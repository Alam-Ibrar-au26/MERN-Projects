const router = require('express').Router();
const Register = require('../controller/registerController.js');
const Login = require('../controller/loginController');

// #User_Register
router.post('/register', Register.signUp);

// #User_Login
router.get('/login', Login.signIn);
router.get('/user', Login.getUser);
router.get('/users', Login.getUsers);
router.put('/update-user', Login.updateUser);
router.delete('/delete-user', Login.deleteUser);

module.exports = router;
