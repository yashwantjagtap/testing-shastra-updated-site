$(function () {
  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    if (!$("#id-contact-us-form").valid()) return false;
    var btn = $("#btnSubmit");
    var form = $("#id-contact-us-form")[0];
    const formData = new FormData(form);
    var sendData = {};
    formData.forEach(function (value, name) {
      sendData[name] = value;
    });
    btn.val("Submitting...").prop("disabled", true);
    $.ajax({
      url: "/save-enquiry",
      data: sendData,
      type: "post",
    })
      .fail(function (error) {
        swal({
          title: "Fail",
          text: "Unable to submit enquiry. Try Again.",
          icon: "warning",
          dangerMode: true,
        }).then(() => {
          btn.val("Submit").prop("disabled", false);
          console.log(error);
        });
      })
      .done(function (data) {
        swal({
          title: "Success",
          text: "Your Enquiry submitted successfully",
          icon: "success",
          dangerMode: false,
        }).then(() => {
          btn.val("Submit").prop("disabled", false);
          window.location.reload();
        });
      });
  });

  $("#id-contact-us-form").validate({
    rules: {
      contactName: {
        required: true,
      },
      contactEmailId: {
        required: true,
        email: true,
      },
      contactPhoneNumber: {
        required: true,
        minlength: 10,
        maxlength: 10,
        number: true,
      },
      contactMessage: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      contactName: {
        required: "Please enter your Name",
      },
      contactEmailId: {
        required: "Please enter the valid email",
        email: "Please enter the valid email",
      },
      contactPhoneNumber: {
        required: "Please enter the valid phone number",
        minlength: "Please enter the valid phone number",
        maxlength: "Please enter the valid phone number",
        number: "Please enter the valid phone number",
      },
      contactMessage: {
        required: "Please enter the message",
        minlength: "Please enter the message minimum of 5 words",
      },
    },
  });
});
