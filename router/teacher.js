const express = require("express");
const checkLogin = require("../middleware/checkLogin");
const upload = require("../middleware/upload");
const router = express.Router();
const TeacherModel = require("../model/teacher");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/teacher/list", checkLogin, (req, res) => {
  // 默认值 空数组
  var teachers = [];
  TeacherModel.find({}, (err, data) => {
    if (!err) {
      // 如果获取到了数据，就将默认值替换掉
      teachers = data;
    }
    res.render("teacher/list", { teachers });
  });
});

router
  .route("/teacher/add")
  .get(checkLogin, (req, res) => {
    res.render("teacher/add");
  })
  .put(upload.single("avatar"), (req, res) => {
    // req.file
    // console.log(req.file);
    // 头像地址：注意是 托管后的 路径
    var avatar = "/uploads/" + req.file.filename;
    // 其他信息req.body
    // console.log(req.body);
    var teacher = { ...req.body, avatar };
    teacher = new TeacherModel(teacher);
    teacher.save(err => {
      if (err) {
        return res.json({
          code: 0,
          message: "网络异常"
        });
      }

      res.json({
        code: 1,
        message: "添加成功！"
      });
    });
  });

router.post("/teacher/del", (req, res) => {
  let where = { ...req.body };
  // 将where._id的值转换成ObjectId
  where._id = ObjectId(where._id);
  console.log(where);
  TeacherModel.deleteOne(where, err => {
    if (err) {
      return res.json({
        code: 0,
        message: "网络异常"
      });
    }

    res.json({
      code: 1,
      message: "删除成功！"
    });
  });
});

module.exports = router;
