import express  from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./configs/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dataBaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:3000',
}
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);

const callBackFunction =() =>{
    console.log(`Server listen at port ${process.env.PORT}`);
}

app.listen(process.env.PORT, callBackFunction);