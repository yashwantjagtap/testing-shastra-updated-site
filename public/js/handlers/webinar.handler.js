$(function () {
  $("#webinarRegistration").on("click", function (event) {
    event.preventDefault();
    var btn = $("#webinarRegistration");
    var form = $("#webinarForm")[0];
    var formData = new FormData(form);
    var sendData = {};
    formData.forEach(function (value, name) {
      sendData[name] = value;
    });
    btn.html("Submitting...").prop("disabled", true);
    $.ajax({
      url: "/save-webinar-candidate",
      type: "post",
      data: sendData,
    })
      .done(function (data) {
        swal({
          title: "Success",
          text: "Your Registration for webinar done successfully",
          icon: "success",
          dangerMode: false,
        }).then(() => {
          btn.html("Submit").prop("disabled", false);
          $("#webinarForm")[0].reset();
        });
      })
      .fail(function (error) {
        swal({
          title: "Fail",
          text: "Your Registration for webinar fail, Try Again.",
          icon: "warning",
          dangerMode: true,
        }).then(() => {
          btn.html("Submit").prop("disabled", false);
          console.log(error);
        });
      });
  });
});
