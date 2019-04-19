const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 120 },
  sex: { type: Number, default: 1 },
  avatar: { type: String, default: "/dist/img/avatar.png" },
  teachAge: { type: Number, default: 0 }
});

const TeacherModel = (module.exports = mongoose.model(
  "teachers",
  teacherSchema
));
