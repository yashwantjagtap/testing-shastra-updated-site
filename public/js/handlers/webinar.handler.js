$(function () {
  $("#webinarRegistration").on("click", function (event) {
    event.preventDefault();
    var form = $("#webinarForm")[0];
    var formData = new FormData(form);
    var sendData = {};
    formData.forEach(function (value, name) {
      sendData[name] = value;
    });
    $.ajax({
      url: "/save-webinar-candidate",
      type: "post",
      data: sendData,
    })
      .done(function (data) {
        alert("Saved");
        console.log(data);
      })
      .fail(function (error) {
        alert("error");
        console.log(error);
      });
  });

  $(document).on("click", "#registerModal", function () {
    alert("submit clicked");
  });
});
