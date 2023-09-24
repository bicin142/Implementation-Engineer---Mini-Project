const { getRepliesToPost, createNewReplyToPost } = require("../controllers/replyController");

const router = require("express").Router();

router.get("/post/:postId", getRepliesToPost)
router.post("/post/:postId", createNewReplyToPost)

module.exports = router;