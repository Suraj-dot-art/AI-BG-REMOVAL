import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;





























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


//  export default connectDB;