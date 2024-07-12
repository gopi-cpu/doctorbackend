const express = require('express')
const hospitalmanagement = require('./router/registerpage')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const mongodb = require('./databse/database')

mongodb.createDbConnection()


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());

app.use('/api',hospitalmanagement)

app.get('/',(req,res)=>{
    res.send("server is running")
})

app.listen(3000,()=>console.log('server running'))