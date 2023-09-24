const {
  createNewUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/", createNewUser);
router.get("/", getUsers);
router.get("/:userId", getUserById);

module.exports = router;
