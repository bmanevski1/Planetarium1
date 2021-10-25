const Phone = require('../model/Phone');

const createNewPhone = async (req, res, next) => {
  const {
      brand,
      os,
      model,
      screenSize,
      yearOfRelease,
  }
  if (!brand || !os || !model || !yearOfRelease || !screenSize) {
    return res.status(400).json('Invalid request!');
  }
  try {
    const newPhone = await Phone.create({
      brand,
      os,
      model,
      yearOfRelease,
      screenSize, 
    });
    return res.status(201).json(newPhone);
  } catch (error) {
    return res.status(500).json(error);
  }
};

  

const getAllPhones = async (req, res, next) => {

  try {
    const allPhones = await Phone.find();
    return res.status(200).json(foundPhone);
  } catch (error) {
    return res.status(500).json(error);
  }
};



module.exports = {
  getAllPhones,
  createNewPhone,
  
};