// Importing local files
const UserModel = require('../models/UserInfo')

//CRUD OPERATIONS
// Creating User
const createUser = (req, res) => {
  UserModel.create(req.body)
  .then(users=> res.status(200).json(users))
  .catch(err=> res.json(err))
}

// Reading User
const readUser = (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

// Updating User
const getUser = (req, res) => {
  const id = req.params.id;

  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

const updateUser = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

// Deleting User
const deleteUser = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
}


module.exports = {createUser, readUser, getUser, updateUser, deleteUser}