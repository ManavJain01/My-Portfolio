// Importing local files
const practice_service = require('../service/practice')

// Reading User
const getZenrows = async (req, res) => {
  const result = await practice_service.zenrows();
  if(result){
    res.send({ "status": true, "data": result });
  } else {
    res.send({ "status": false, "data": "Data not found" });
  }
  // console.log("reading practice");
}

const testing = async (req, res) => {
  const result = await practice_service.testing();
  if(result){
    res.send({ "status": true, "data": result });
  } else {
    res.send({ "status": false, "data": "Data not found" });
  }
  // console.log("reading testing");
}

module.exports = { getZenrows, testing }