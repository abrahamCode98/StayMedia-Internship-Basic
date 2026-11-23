import mongoose from "mongoose";


const connectDB = async() => {
    try {
        console.log("Connecting to the dataabase...")
        
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connection successful")

    }catch(error) {
        console.log("Error connecting to the database:", error)
    }
}

export default connectDB;