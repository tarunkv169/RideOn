const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const { authCaptain } = require('../middlewares/auth.middleware');

router.post('/register',
    [
        body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 character long'),
        body('email').isEmail().withMessage('Email is invalid'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('vehicle.color').isLength({ min: 1 }).withMessage('Vehicle color is required'),
        body('vehicle.plate').isLength({ min: 1 }).withMessage('Vehicle plate is required'),
        body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be a positive integer'),
        body('vehicle.vehicleType').isLength({ min: 1 }).withMessage('Vehicle type is required')
    ],
    captainController.registerCaptain
);

router.post('/login',captainController.loginCaptain);
router.get('/profile',authCaptain,captainController.captainProfile);
router.get('/logout',captainController.logoutCaptain)

module.exports = router;