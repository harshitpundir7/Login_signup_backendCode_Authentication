import mongoose from "mongoose";

async function connectDB (DATABASE_URL){
    try{
        const DB_USER = { 
            dbName: "usersData"
        }
        await mongoose.connect(DATABASE_URL, DB_USER);
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
    }
}
export default connectDB;