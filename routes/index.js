const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");
const {
  getCampus,
  getCampuses,
  createCampus,
  updateCampus
} = require("../controllers/campus");
const {
  getGroup,
  getGroups,
  createGroup,
  updateGroup,
  getGroupsByCampus,
  getGroupsByCampusAndCourse
} = require("../controllers/group");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Campus */

router.get("/campus", catchErrors(getCampuses));
router.get("/campus/:id", catchErrors(getCampus));
router.post("/campus", catchErrors(createCampus));
router.patch("/campus/:id", catchErrors(updateCampus));

/* Groups */
router.get("/groups", catchErrors(getGroups));
router.get("/groups/campus/:code", catchErrors(getGroupsByCampus));
router.get(
  "/groups/campus/:code/:course",
  catchErrors(getGroupsByCampusAndCourse)
);
router.get("/groups/:id", catchErrors(getGroup));
router.post("/groups", catchErrors(createGroup));
router.patch("/groups/:id", catchErrors(updateGroup));

module.exports = router;
