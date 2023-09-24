const { createPost, getLatestPost } = require("../controllers/postController");

const router = require("express").Router();

router.post("/", createPost);
router.get("/latest", getLatestPost)

module.exports = router;