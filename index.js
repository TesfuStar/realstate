import express from 'express'
import mongoose  from 'mongoose'
import dotenv  from 'dotenv'
import property from './routes/property.js'
import agent from './routes/agent.js'
import cors from 'cors'
dotenv.config()
const app=express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('db connection successful'))
.catch((e)=>{console.log(e)})
app.get('/',(req,res)=>{
    res.send("successful")
})


app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({origin:"http://localhost:3000",methods:"GET,POST",credentials:true}));
app.use('/api/property',property)
app.use('/api/agent',agent)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{console.log("server is running")})

