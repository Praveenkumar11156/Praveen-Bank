
import express from 'express'
import Bodyparser  from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import bank from "./routes/user.js"
import dotenv from 'dotenv';
dotenv.config();

const app= express()

app.use(cors())
app.use(Bodyparser.json())
app.use(Bodyparser.text())
app.use(express.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.use(express.json());

app.use(cors());
app.use("/api/bank",bank)

// mongoose.connect('mongodb://127.0.0.1:27017/myBank')
// .then(() => console.log('Connected to MongoDB...'))
// .catch(err => console.error('Could not connect to MongoDB...'));


// app.listen(4400,()=>{
//     console.log("server is running on 4400");
// })

const dbUrl = `mongodb+srv://memmeringjoseph:${process.env.MONGO_PASSWORD}@cluster0.ev6af7k.mongodb.net/Bank?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
.connect(dbUrl, connectionParams)
.then(() => {
    console.info("connected to the DB");
})
.catch((e) => {
    console.log("Error",e);
});

app.listen(4400,()=>{
    console.log("server is running on 4400");
})