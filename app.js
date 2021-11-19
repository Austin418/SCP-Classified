require("dotenv").config
require("express-async-errors")

const express = require("express")
const app = express();

const connectDB = require("./db/connect")

// const rateLimiter = require("express-async-errors")
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")

const swaggerUI = require("swagger-ui-express")
// const YAML = require("yamljs")
// const swaggerDocs = yaml.load("./swagger.yaml")

const port = process.env.PORT || 3000
app
.set('trust proxy', 1)
// .use(rateLimiter({
//     windowMs: 1000 * 60 * 15,
//     max: 100
// }))
.use([express.urlencoded({ extended: false }), express.json()])
.use(helmet())
.use(cors())
.use(xss())

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log((`the server is listening at port ${port}`));
        })
    } catch (error) {
        console.log(error);
    }
}

start();
