$(function() {
  // 删除讲师
  $("#list").on("click", ".del", function() {
    // 确认框
    if (confirm("确认删除？")) {
      var id = this.id;
      //   console.log(id);
      $.ajax({
        url: "/teacher/del",
        method: "post",
        data: { _id: id },
        success: function(res) {
          alert(res.message);
          if (res.code === 1) {
            location.reload();
          }
        }
      });
    }
  });
});
