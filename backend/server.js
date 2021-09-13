import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import webdetailsRouter from './routes/webdetails.js';

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/webdetails', webdetailsRouter)

const CONNECTION_URL = 'mongodb+srv://administrator:aY6PTnp5tDUrshbV@ecommercecluster.dfrno.mongodb.net/WebDetailsDB?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(PORT, console.log(`Conected to db,Listening on port ${PORT}`)) })
    .catch((error) => { console.log('Error connecting to db', error.message) })

mongoose.set('useFindAndModify', false)