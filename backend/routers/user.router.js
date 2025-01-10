const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const { authUser } = require('../middlewares/auth.middleware');

router.post('/register',
     [
        body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character long'),
        body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 character long'),
        body('email').isEmail().withMessage('Enter a valid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
     ],
     userController.registerUser
)

router.post('/login', userController.loginUser);
router.get('/profile', authUser, userController.userProfile); // Added auth middleware
router.get('/logout',userController.logoutUser);

module.exports = router;