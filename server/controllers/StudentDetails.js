// Importing local files
const studentDetails_service = require('../service/StudentDetails')

const findAllUser = async (req, res) => {
  const result = await studentDetails_service.findAllUserDB();
  if(result){
    res.send({ "status": true, "data": result });
  } else {
    res.send({ "status": false, "data": "User not found" });
  }
}

const findOneUserController = async (req, res) => {
  const result = await studentDetails_service.findOneUserDBService(req.params.name);
  if(result){
    res.send({ "status": true, "data": result });
  } else {
    res.send({ "status": false, "data": "User not found" });
  }
}



module.exports = { findOneUserController, findAllUser }