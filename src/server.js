import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { JoiSchemaValidation } from './middlewares/JoiMidleware.js';
import { userSchema } from './schemas/userSchema.js';

// instantiate express server as app

const app = express();

/*============================
Global Middlewares
These middlewares apply on all routes in our apis
=============================*/

// Json middleware
app.use(express.json())



/*============================
Home route as health check
=============================*/

app.get("/",(req,res)=>{
  res.status(StatusCodes.OK).json({status:true, message:"server is running successfully"})
})


// post request to create user
app.post("/users", JoiSchemaValidation(userSchema), (req,res)=>{
  const data = req.body;
  res.status(StatusCodes.CREATED).json({status:true, message:"User created successfully", data: data})

})


// now listend this server on our machine's port 5000
const port = process.env.PORT || 8000
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})




