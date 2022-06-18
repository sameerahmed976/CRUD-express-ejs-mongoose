const StudentModel = require("../models/StudentNodels");

class StudentController {
  static getAllDoc = async (req, res) => {
    const student = await StudentModel.find();
    // console.log(student);
    res.render("index", { data: student });
  };

  static createDoc = async (req, res) => {
    const name = req.body.name;
    const age = parseInt(req.body.age);
    const fees = parseInt(req.body.fees);

    const student = await StudentModel.create({
      name,
      age,
      fees,
    });

    res.redirect("/student");
  };

  static editDoc = async (req, res) => {
    const id = req.params.id;

    const student = await StudentModel.findById(id);

    res.render("edit", { data: student });
  };

  static updateDocById = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const age = parseInt(req.body.age);
    const fees = parseInt(req.body.fees);
    const student = await StudentModel.findByIdAndUpdate(id, {
      name,
      age,
      fees,
    });

    res.redirect("/student");
  };
  static deleteDocById = async (req, res) => {
    const id = req.params.id;
    const student = await StudentModel.findByIdAndDelete(id);

    res.redirect("/student");
  };
}

module.exports = StudentController;
