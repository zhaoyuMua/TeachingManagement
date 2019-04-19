module.exports = (req, res, next) => {
  // 登录验证
  if (req.session.user) {
    // 验证通过, 放行 next()
    next();
  } else {
    // 否则重定向到 '/login'
    res.redirect("/login");
  }
};
