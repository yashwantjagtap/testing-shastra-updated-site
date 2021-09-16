$(function () {
  $("#webinarRegistration").on("click", function (event) {
    event.preventDefault();
    if (!$("#webinarForm").valid()) return false;
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
  $("#webinarForm").validate({
    rules: {
      candidateFName: {
        required: true,
      },
      candidateLName: {
        required: true,
      },
      candidateMobileNo: {
        required: true,
        minlength: 10,
        maxlength: 10,
        number: true,
      },
      candidatePercentage: {
        required: true,
        minlength: 2,
        maxlength: 2,
        number: true,
      },
      candidateEmailId: {
        required: true,
        email: true,
      },
      candidateInstituteName: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      candidateFName: {
        required: "Please enter your First Name",
      },
      candidateLName: {
        required: "Please enter your Last Name",
      },
      candidateEmailId: {
        required: "Please enter the valid email",
        email: "Please enter the valid email",
      },
      candidateMobileNo: {
        required: "Please enter the valid phone number",
        minlength: "Please enter the valid phone number",
        maxlength: "Please enter the valid phone number",
        number: "Please enter the valid phone number",
      },
      candidatePercentage: {
        required: "Please enter the valid percentage",
        minlength: "Please enter the valid percentage",
        maxlength: "Please enter the valid percentage",
        number: "Please enter the valid percentage",
      },
      candidateInstituteName: {
        required: "Please enter the message",
        minlength: "Please enter the message minimum of 3 words",
      },
    },
  });
});
