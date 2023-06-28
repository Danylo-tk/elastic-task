const express = require("express");
const router = express.Router();

const {
  getAllUsersCount,
  createUser,
  getTopPopularNames,
  getAverageAge,
} = require("../controllers/usersControllers");

router
  .get("/users", getAllUsersCount)
  .post("/users", createUser)
  .get("/users/top-users-names", getTopPopularNames)
  .get("/users/average-age", getAverageAge);

module.exports = router;
