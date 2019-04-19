const express = require("express");
const UserModel = require("../model/user");
const path = require("path");
const crypto = require("crypto");
const checkLogin = require("../middleware/checkLogin");

const router = express.Router();

// 主页路由
router.get("/", checkLogin, (req, res) => {
  // res.sendFile(path.resolve("./view/home/index.html"));
  res.render("home/index");
});

router
  .route("/login")
  .get((req, res) => {
    res.sendFile(path.resolve("./view/home/login.html"));
  })
  .post((req, res) => {
    let { username, password } = req.body;

    // 给密码加密 然后在去合数据库匹配
    let md5 = crypto.createHash("md5");
    password = md5.update(password).digest("hex");

    UserModel.findOne({ username, password }, (err, user) => {
      if (err) {
        return res.json({
          code: 0,
          message: "网络异常"
        });
      }
      if (user) {
        // 在 响应之前，保存登录状态
        req.session.user = { name: user.username, avatar: user.avatar };
        res.json({
          code: 1,
          message: "登录成功"
        });
      } else {
        res.json({
          code: -3,
          message: "用户名或密码错误"
        });
      }
    });
  });

router.get("/register", (req, res) => {
  res.sendFile(path.resolve("./view/home/register.html"));
});

router.post("/register", (req, res) => {
  // 获取post数据
  // console.log(req.body);
  // [Object: null prototype]
  // { username: 'guo', password: '123', repasswd: '123' }
  var { username, password, repasswd } = req.body;
  // 验证
  if (password !== repasswd) {
    // 使用json方法给客户端响应json数据
    res.json({
      code: -1,
      message: "密码不一致"
    });

    return;
  }
  // 验证用户名不能重复
  UserModel.findOne({ username }, (err, user) => {
    if (err) {
      return res.json({
        code: 0,
        message: "网络异常！"
      });
    }
    console.log(user);
    if (user) {
      return res.json({
        code: -2,
        message: "用户名已存在！"
      });
    } else {
      // 向集合Users插入新文档
      // 在保存之前 将密码加密
      const md5 = crypto.createHash("md5");
      password = md5.update(password).digest("hex");

      let um = new UserModel({ username, password });
      um.save(err => {
        if (err) {
          return res.json({
            code: 0,
            message: "网络异常！"
          });
        }

        res.json({
          code: 1,
          message: "注册成功！"
        });
      });
    }
  });
});

router.get("/about", (req, res) => {
  const data = { name: "guo", age: 18 };
  // res.render绑定数据到视图模板，同时给客户端响应 得到的html页面
  /**
   * 第一个参数 是  视图模板名字 不带扩展名
   * 第二个参数 是  视图要绑定的数据
   */
  res.render("about", data);
});

module.exports = router;
