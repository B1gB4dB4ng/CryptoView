const Favcoin = require("../models/favcoinModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// get all favcoins
const getFavcoins = async (req, res) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const favcoins = await Favcoin.find({ user_id: _id }).sort({
      createdAt: -1,
    });
    res.status(200).json(favcoins);
    console.log(favcoins);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "No fav" });
  }
};

// create new favcoin
const createFavcoin = async (req, res) => {
  const { coinName } = req.body;

  // add doc to db

  try {
    const user_id = req.user._id;

    const favcoin = await Favcoin.create({
      coinName,
      user_id,
    });
    res.status(200).json(favcoin);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(req.body);
  }
};

// delete a favcoin

const deleteFavcoin = async (req, res) => {
  const { id } = req.params;

  const favcoin = await Favcoin.deleteMany({ coinName: id });

  if (!favcoin) {
    return res.status(400).json({ error: "No such favcoin" });
  }

  res.status(200).json(favcoin);
};

module.exports = {
  getFavcoins,
  createFavcoin,
  deleteFavcoin,
};
