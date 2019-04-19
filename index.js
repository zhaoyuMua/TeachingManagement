const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./router");
const teacherRouter = require("./router/teacher");
const cookieSession = require("cookie-session");

const app = express();
// 配置express视图引擎
app.set("view engine", "ejs");
// 设置视图路径
app.set("views", "view");
// 托管静态文件
app.use(express.static("public"));
// 配置bodyParser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 配置cookie-session
app.use(
  cookieSession({
    name: "nodesess", // 设置cookie信息的name
    keys: ["tm", "node", "express"],
    maxAge: 20 * 60 * 1000
  })
);

app.use(indexRouter);
app.use(teacherRouter);

app.on("error", err => {
  console.error(err);
});

app.listen(8080, "localhost", () => {
  console.log("Server Running.");
});

// 数据库连接
/**
 * 第一个参数就是 mongodb地址
 * 第二参数 为 回调函数
 */
mongoose.connect("mongodb://localhost:27017/tm", err => {
  if (err) return console.error("数据库连接失败", err);

  console.log("数据库连接成功。");
});
