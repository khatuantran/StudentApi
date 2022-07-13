import express, { Express } from "express";
import  errorHandlerMiddleware  from "./middlewares/errorHandler";
import createNotFoundError from "./middlewares/notFound";
import authRouter from "./routers/auth";
import graphQLServer from './graphServer/createServer'

const app:Express = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/graphql', graphQLServer)
app.use('/auth', authRouter)

//404 not found
app.use(createNotFoundError)
//error handler
app.use(errorHandlerMiddleware)
export default app 