// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: `./env`,
})

connectDB()
.then(
    app => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
        }
)
.catch((error)=>{
    console.log(`Error connecting to database ${error}`)
});







/*
import express from 'express';
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log('Error connecting to the database: ', error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR:", error);
        throw err
    }
})()
*/