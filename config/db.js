/************
 * Author: Moni Shah 
 **********/
const mongoose = require('mongoose');

// DB configurations
const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (err) {
        console.log(`Error: ${err.message} `)
        process.exit(1);
    }
}

module.exports = connectDB;