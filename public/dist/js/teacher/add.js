$(function() {
  // avatar preview
  $("input[name=avatar]").on("change", function(e) {
    previewFile(e.target.files[0]);
  });
  function previewFile(file) {
    var preview = document.querySelector("#avatarPreview");
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  // 讲师添加
  $("form").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);

    fetch("/teacher/add", {
      method: "PUT",
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", response);
        alert(response.message);
        if (response.code === 1) {
          location = "/teacher/list";
        }
      });
  });
});
