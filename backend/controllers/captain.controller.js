const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator')
const captainService = require('../services/captain.service');


module.exports.registerCaptain = async(req,res)=>{

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
       
}