require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()
const connectDB = require('./db/connect')


//routes



//middleware



//Variable Declarations
const port = process.env.Port || 3000


app.use([
  express.urlencoded({extended: false}),
  express.json()
])
.use(express.static('/public'))

.use(notFoundError)
.use(errorHandlerMiddleware)

const startup = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server listening @${port}`);

    })
  }catch(err){
    console.log(err);
  }
}

startup()