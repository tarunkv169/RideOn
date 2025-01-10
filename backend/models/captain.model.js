const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,'First name must be at least 3 character long']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength:[6, 'Password must be at least 6 characters long']
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
        },
        plate:{
            type: String,
            required:true
        },
        capacity:{
            type: Number,
            required: true,
            min: [ 1, 'Capacity must be at least 1' ]
        },
        vehicleType:{
            type: String,
            required: true,
            enum:['car','bike','auto']
        }

    },
    location:{
        ltd:{
            type: Number
        },
        lng:{
            type: Number
        }
    },

})


captainSchema.methods.generateAuthToken = function(){
      
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET);

    return token;
}

captainSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = function(password){
    return bcrypt.hash(password, 10);
}


const captainModel = mongoose.model('captainModel',captainSchema);

module.exports = captainModel;