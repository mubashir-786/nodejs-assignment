const express = require('express')
const router = express.Router()
const Users = require('../models/loginUser')
const bcryptjs = require("bcryptjs")

router.post('/signup', async (req, res) => {
 const {email,password,name} = req.body

  try {
    const user =  new Users({email : email,password : password,name : name})
    const response = await user.save()
    res.send(response)
  } catch (e) {
    res.send({ message: e })
  }
})
router.post('/login', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  const user = await Users.findOne({ email })
  if (!user) {
    return res.send({ message: 'No user found. Please register!' })
  }

  const isAuthenticated =  bcryptjs.compareSync(password, user.password, );
  if (!isAuthenticated) {
    return res.send({ message: 'invalid password ' })
  }

  const token = await user.generateToken()
  return (
    res.send({user, current_token : token})

  )


})

module.exports = router

