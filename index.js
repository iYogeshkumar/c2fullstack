const express = require("express");
const connection = require("./db")
const cors = require("cors");
const authRouter= require("./routes/auth.routes");
const noteRouter = require("./routes/note.routes");
require("dotenv").config();



const app = express();

app.use(cors());
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", noteRouter)

app.get("/",async(req, res)=>{
    res.send ("page working")
})


const PORT = process.env.PORT || 8888

app.listen(PORT, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log("Server listening on localhost:8888")
})