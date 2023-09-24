const router = require("express").Router();
const userRoute = require("./userRoute");
const postRoute = require("./postRoute");
const replyRoute = require("./replyRoute");
const errorHandler = require("../middlewares/errorHandler");

router.get("/", (req, res) => res.json({message: "Postr API - Andhika Bayu Mietra"}));

router.use("/users", userRoute);
router.use("/posts", postRoute);
router.use("/replies", replyRoute);

router.use(errorHandler)

module.exports = router;
