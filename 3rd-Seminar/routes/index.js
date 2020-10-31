var express = require("express");
const { routes } = require("../app");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/ranking", require("./ranking"));
router.use("/society", require("./society"));
router.use("/members", require("./members"));

module.exports = router;
