import express from "express";
import config  from "./mongoDB/config";
import postRoutes from "./routes/postRoute";

const port=5000
const app=express()

app.use(express.json)
config();

app.use('/api/post', postRoutes )

app.listen(port , ()=>console.log(`server running on port ${port}`))