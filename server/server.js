import express from "express"
import cors from "cors" // To accept requests from frontend server

const corsOptions = {
    origin:["http://localhost:5173"]
}

const app = express() // npm run dev to start server
app.use(cors(corsOptions))

app.get("/api",(req,res)=>{
    return res.json({ fruits : ["apple","orange","banana"] })
})

app.listen(8080,()=>{
    console.log("App listening on port 8080")
})
