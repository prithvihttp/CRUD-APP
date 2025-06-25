import mongoose from "mongoose"

export const connectdb = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Failed: ",error.message);
        process.exit(1);
        
    }
    
}
