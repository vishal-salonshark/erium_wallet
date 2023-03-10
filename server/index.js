/* eslint-disable no-unused-vars */
var express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
var UserData = require('./model')

var app = express()

function dataLoder() {
console.log('DataLoder in action..')
}

app.use(express.json())
app.use(cors())

mongoose
.connect(
  'mongodb+srv://Explorer:Exp121@explorer.fgll2dl.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(async () => {
    console.log('CONNECTED')
    dataLoder()
  })
 
app.put('/userData', async (req, res) => {
  const email = req.body.email
  const userID = req.body.userid
  const password = req.body.password

  const data = UserData.create({
    email : email,
    userID : userID,
    password: password,
  })

  res.json({result:"success"})

})

app.get('/login/:emailID',(req, res) => {
  var emailid = req.params.emailID
  UserData.find({"email" : emailid}).then( (result) => {
      res.json(result);
    })
  })

 
app.listen(5500, function () {
  console.log('server listening on port 5500')
})