const userModel = require('../models/user.model');
const {validationResult} = require('express-validator');
const userService = require('../services/user.service');

module.exports.registerUser = async(req,res)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty())
        {
            return res.status(401).json({error:error.array()})
        }       
        
        const {fullname,email,password} = req.body;

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