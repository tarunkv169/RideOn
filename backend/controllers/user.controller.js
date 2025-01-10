const userModel = require('../models/user.model');
const {validationResult} = require('express-validator');
const userService = require('../services/user.service');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async(req,res)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty())
        {
            return res.status(401).json({error:error.array()})
        }       
        
        const {fullname,email,password} = req.body;

        const isUser = await userModel.findOne({'email':email})
        if(isUser)
        {
            return res.status(400).json({message:'User already exists'});
        }

        // hash the password first then send to save in db
        // @ts-ignore
        const hashedpassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password:hashedpassword
        })

        // @ts-ignore
        const token = user.generateAuthToken();

        res.status(201).json({token,user});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports.loginUser = async(req,res)=>{

    try {

        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            res.status(401).json({error:errors.array()})
        }


        const {email,password} = req.body;



        // 1️⃣check email
        const user = await userModel.findOne({email}).select('+password');
        if(!user)
        {
            res.status(401).json('Invalid email and password');
        }


        // 2️⃣check password
        // @ts-ignore
        const isMatch = await user.comparePassword(password);
        if(!isMatch)
        {
            res.status(401).json('Invalid email and password');
        }


        // 3️⃣if email and password are valid , then create token for user to remain login for 24 hours as we mentioned, by 
        //      putting in cookie of website
        // @ts-ignore
        const token = await user.generateAuthToken();
        res.cookie('token',token);


        res.status(200).json({token,user});
        

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }

}

module.exports.userProfile = async(req,res,next)=>{
       // need of middleware to check token have cred of user, then allow to see profile
       res.status(200).json(req.user);

}

module.exports.logoutUser = async(req,res)=>{

    res.clearCookie('token');
    const token = req.cookies?.token || req.headers.authorization.split(' ')[1];

    if(token)
    {
        await blacklistTokenModel.create({token});
    }
    res.status(200).json({message: 'Logged Out'});

}

