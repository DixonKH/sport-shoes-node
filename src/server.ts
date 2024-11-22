console.log("Executed");
import dotenv from "dotenv";  
dotenv.config();

import mongoose from "mongoose";
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3001;
})
.catch((err) => console.log("ERROR on connection MongoDB: ", err));



  