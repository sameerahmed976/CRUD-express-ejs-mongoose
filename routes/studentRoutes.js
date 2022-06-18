const express = require("express");
const StudentController = require("../controller/studentController");
const router = express.Router();

router
  .route("/")
  .get(StudentController.getAllDoc)
  .post(StudentController.createDoc);

router.route("/edit/:id").get(StudentController.editDoc);
router.route("/update/:id").post(StudentController.updateDocById);
router.route("/delete/:id").post(StudentController.deleteDocById);

module.exports = router;
