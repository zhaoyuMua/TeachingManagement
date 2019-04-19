$(function() {
  $("input").iCheck({
    checkboxClass: "icheckbox_square-blue",
    radioClass: "iradio_square-blue",
    increaseArea: "20%" // optional
  });
  // 给表单绑定submit事件
  $("form").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      url: "/login",
      method: "post",
      data: $(this).serialize(),
      success: function(res) {
        alert(res.message);
        // 登录成功后 跳转到主页
        if (res.code === 1) {
          location = "/";
        }
      }
    });
  });
});
