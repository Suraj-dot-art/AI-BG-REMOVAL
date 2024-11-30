import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Set up event listeners before connecting
        mongoose.connection.on('connected', () => {
            console.log("Database Connected Successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("Database connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("Database disconnected");
        });

        // Connect to the database
        // console.log(process.env.MONGODB_URI);
        await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);

    } catch (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit process with failure
    }
};


 export default connectDB;