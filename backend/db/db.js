const mongoose = require('mongoose');

const connectToDB=async()=>{

    try {
        
        const connectUri = process.env.CONNECT_DB;
        if (!connectUri) {
            throw new Error('CONNECTURI is not defined in environment variables');
        }
        await mongoose.connect(connectUri);
        console.log('mongodb connected successfully');

    } catch (error) {
        console.log(error)
    }

    // mongoose.connect(connectUri)
    //     .then(() => console.log('Connected to DB'))
    //     .catch(err => console.log(err));
}

module.exports = connectToDB