// 1 引入mongoose
const mongoose = require("mongoose");

// 2 创建模式
// 定义数据库 与 js对象的映射关系
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: ""
  },
  phone: {
    type: Number,
    default: null
  },
  avatar: {
    type: String,
    default: "/dist/img/avatar.png"
  }
});

// 3 导出模型
// 注意：model方法第一个参数  必须是 可数单词的复数形式
const User = mongoose.model("users", userSchema);

// 4 暴露模型
module.exports = User;
