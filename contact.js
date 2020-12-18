$(document).ready(function () {

      $('#contact-form').submit(function (event) {
        var formData = $('#contact-form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeCLZZisNiavWQ9MAgYIU_Ct3sJQY6rLaplsDl3XTLy00ONEQ/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".submit-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

    });