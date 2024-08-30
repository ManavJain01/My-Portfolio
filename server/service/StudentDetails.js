// Importing local files
const UserModel = require('../models/StudentDetails')

findAllUserDB = () => {
  return UserModel.find({})
  .then(user => { return user })
  .catch(err => { return err })
}

findOneUserDBService = (userDetails) => {  
  return UserModel.findOne({name: userDetails})
  .then(user => { return user })
  .catch(err => { return err })
}

module.exports = { findOneUserDBService, findAllUserDB }