const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator')
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerCaptain = async(req,res)=>{
   try {
      const errors = await validationResult(req);
       if(!errors.isEmpty())
       {
          return res.status(401).json({errors:errors.array()});
       }

       const {fullname,email,password,vehicle,location} = req.body;

       // check email,password
       const iscaptain = await captainModel.findOne({'email':email});
       if(iscaptain)
       {
          return res.status(400).json({message:'Captain already exists'});
       }

       // @ts-ignore
       const hashedPassword = await captainModel.hashPassword(password);

       const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType,
        ltd:location.ltd,
        lng:location.lng
       })

       // @ts-ignore
       const token = captain.generateAuthToken();

       res.status(201).json({token,captain});
   } catch (error) {
      console.log(error);
      return res.status(500).json({message:'Internal Server Error'});
   }
       
       
}

module.exports.loginCaptain = async(req,res)=>{
   try {
      const errors = validationResult(req);
      if(!errors.isEmpty())
      {
         return res.status(400).json({errors:errors.array()});
      }

      const {email,password} = req.body;

      //1
      const captain = await captainModel.findOne({'email':email}).select('+password');
      if(!captain)
      {
         return res.status(400).json({message:'Invalid email and password'});
      }

      //2
      if(!password)
      {
         return res.status(400).json({message:'Invalid email and password'});
      }
      // @ts-ignore
      const isMatch = await captain.comparePassword(password);
      if(!isMatch)
      {
          return res.status(401).json({message:'Unauthorized'});
      }

      // @ts-ignore
      const token = await captain.generateAuthToken();

      res.cookie('token',token);

      res.status(200).json({token,captain});

   } catch (error) {
      console.log(error);
      return res.status(500).json({message:'Internal Server Error'});
   }
}

module.exports.captainProfile = async(req,res)=>{
   return res.status(201).json(req.captain);
}

module.exports.logoutCaptain = async(req,res)=>{
   try {
      res.clearCookie('token');

      const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

      if(token)
      {
          await blacklistTokenModel.create({token});
      }

      return res.status(201).json({message:'Logged Out'})

   } catch (error) {
      console.log(error);
      return res.status(500).json({message:'Internal Server Error'});
   }
}


