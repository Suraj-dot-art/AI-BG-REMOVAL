require('dotenv').config();
const mongoose = require('mongoose');

let isConnected = false; // Track connection status

const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return;
    }
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is not defined');
        }

        const connection = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = connection.connections[0].readyState === 1;
        console.log('Database Connected Successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        throw err;
    }
};

module.exports = connectDB;



























// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected' , () => {
//         console.log("Database Connected Succesfully");
//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/ai-bg-removal`)
// }




// const connectDB = async () => {
//     try {
//         // Set up event listeners before connecting
//         mongoose.connection.on('connected', () => {
//             console.log("Database Connected Successfully");
//         });

//         mongoose.connection.on('error', (err) => {
//             console.error("Database connection error:", err);
//         });

//         mongoose.connection.on('disconnected', () => {
//             console.log("Database disconnected");
//         });
    
//         // Connect to the database
//         // console.log(process.env.MONGODB_URI);
//         await mongoose.connect(`${process.env.MONGODB_URI}`);

//     } catch (err) {
//         console.error("Error connecting to the database:", err);
//         process.exit(1); // Exit process with failure
//     }
// };


 export default connectDB;