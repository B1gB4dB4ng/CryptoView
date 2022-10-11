const express = require("express");
const {
  createFavcoin,
  getFavcoins,
  deleteFavcoin,
  updateFavcoin,
} = require("../controllers/favcoinController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all routes
router.use(requireAuth);

//GET all favcoins
router.get("/", getFavcoins);

//POST a single favcoin
router.post("/", createFavcoin);

//DELETE a single favcoin
router.delete("/favcoin/:id", deleteFavcoin);

module.exports = router;
