$(document).ready(function () {

  $("#toggle-design-image").click(function () {
    $("#toggle-design-image").hide();
    $("#p-design").toggle();
    $("#p-design").show();
  });
  $("#p-design").click(function () {
    $("#p-design").hide();
    $("#toggle-design-image").toggle();
    $("#toggle-design-image").show();
  });

  $("#toggle-development-image").click(function () {
    $("#toggle-development-image").hide();
    $("#p-development").toggle();
    $("#p-development").show();
  });
  $("#p-development").click(function () {
    $("#p-development").hide();
    $("#toggle-development-image").toggle();
    $("#toggle-development-image").show();
  });

  $("#toggle-product-image").click(function () {
    $("#toggle-product-image").hide();
    $("#p-product").toggle();
    $("#p-product").show();
  });
  $("#p-product").click(function () {
    $("#p-product").hide();
    $("#toggle-product-image").toggle();
    $("#toggle-product-image").show();
  });

  $('#work1-space').hover(function () {
    $('#text4').fadeToggle();
  });

  $(function () {
    var mobileScreenTreshold = 1024;
    $(".hvrbox").click(function (e) {
      if ($(window).width() <= mobileScreenTreshold) {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          e.preventDefault();
          $(this).addClass("active");
        }
      } else {
        $(this).removeClass("active");
      }
    });
  });

});

$(document).ready(function () {
  $('#submit').click(function () {
    var Name = $('#Name').val();
    var Email = $('#Email').val();
    var Message = $('#Message');
    if (Name == '' || Email == '' || Message == '') {
      alert('Please make sure you have filled in the form correctly!');
    } else {
      alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
  });
});
