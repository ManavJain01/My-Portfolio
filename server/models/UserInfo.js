const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

const UserModel = mongoose.model("userInfos",UserSchema)
module.exports = UserModel