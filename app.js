import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import tuitsController from './controllers/tuits/tuits-controller.js'
import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
tuitsController(app)
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
mongoose.connect('mongodb://localhost:27017/tuiter');
app.get('/env', (req,res)=> res.send(process.env.DB_CONNECTION_STRING))
app.listen(process.env.PORT||4000)