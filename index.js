const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
require ('dotenv').config()
const tradesRoutes = require('./routes/trades.routes')

app.use(express.json())

// Routes
app.use('/api/trades', tradesRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=> {
  console.log('MongoDB connected sucessfully')
})
.catch((err)=> {
  console.error('MongoDB connection error',err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

