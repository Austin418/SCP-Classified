const User = require('../model/userSchema.js')
const bcrypt = require('bcrypt')
const {BadRequestError, UnauthError} = require('../error')
const register = async (req, res) => {
  const newUser = create(req.body)
  const token = newUser.createJWT
  res.json({user: {name: newUser.name}, token})
}

const login = async (req, res) => {
  const {email, password} = req.body
  if(!email || !password) {
    throw new BadRequestError('please provide an email and password')
  }
  const userLogin = await User.findOne({email})
  if(!userLogin) {
    throw new UnauthError('Invalid Credentials')
    
  }
  const isPasswordCorrect = await userLogin.comparePassword(password)
    if(!isPasswordCorrect){
      throw new UnauthError('invalid cred')
    }
    const token = userLogin.createJWT()
    res.json({user: {name: userLogin.name}, token})

}

module.exports = {register, login}