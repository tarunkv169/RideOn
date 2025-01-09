const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,'First name must be at least 3 character long']
        },
        lastname:{
            type: String,
            minlength:[3,'Last name must be at least 3 character long']
        }
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength:[6,'password must be at least 6 character long']
    },
    socketId:{
        type: String
    }

})


// this is method so called by instance of userModel 'await user.generateAuthToken(password);'
userSchema.methods.generateAuthToken = function(){      
      
    try {

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET,{expiresIn: "24h"});
        return token;

    } catch (error) {
        console.log(error);
    }
}

// this is method so called by instance of userModel 'await user.comparePassword(password);'
userSchema.methods.comparePassword = async function(password){ 
     return await bcrypt.compare(password, this.password);
}

// this is static, so called by userModel 'await userModel.hashPassword(password)'
userSchema.statics.hashPassword = async function(password){   
    return await bcrypt.hash(password,10);
}


const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel