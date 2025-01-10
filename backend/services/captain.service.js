const captainModel = require('../models/captain.model');

module.exports.createCaptain = async({firstname,lastname,email,password,color,plate,capacity,vehicleType,ltd,lng})=>{
     
    // which r required check those
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType)
    {
        throw new Error('All fields are required');
    }

    // put justlike put in schema
    const captain = await captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        },
        location:{
            ltd,
            lng
        }
    })

    return captain;

}