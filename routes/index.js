const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");
const {
  getCampus,
  getCampuses,
  createCampus,
  updateCampus
} = require("../controllers/campus");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Campus */

router.get("/campus", catchErrors(getCampuses));
router.get("/campus/:id", catchErrors(getCampus));
router.post("/campus", catchErrors(createCampus));
router.patch("/campus/:id", catchErrors(updateCampus));

module.exports = router;
