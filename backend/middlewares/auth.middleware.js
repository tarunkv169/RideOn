const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if(!token)
    {
        return res.status(401).json({message:'Unauthorized'});
    }

    const isblacklistToken = await blacklistTokenModel.findOne({'token':token});

    if(isblacklistToken)
    {
        return res.status(401).json({message:'Unauthorized'});
    }

    try {

        // @ts-ignore
        const userCred = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(userCred._id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;

        return next();
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    try {

        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
        if(!token)
        {
            return res.status(401).json({message:'Unauthorized'});
        }
        
        const isblacklistToken = await blacklistTokenModel.findOne({'token':token});
        if(isblacklistToken)
        {
            return res.status(401).json({message:'Unauthorized'});
        }
        
        // @ts-ignore
        const captainCred = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(captainCred._id);
        
        if(!captain)
        {
            return res.status(401).json({message:'Unauthorized'}); 
        }

        req.captain = captain;

        return next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}