keba:
$(document).ready(function () {
  $('#toggle').click(function () {
      $('#p1').show();
  });
  $('#toggle').click(function () {
      $('#toggle').hide();
  });

  $('#p1').click(function () {
      $('#toggle').show();
  });
  $('#p1').click(function () {
      $('#p1').hide();
  }); 
  $('#toggle2').click(function () {
      $('#p2').show();
  });
  $('#toggle2').click(function () {
      $('#toggle2').hide();
  });

  $('#p2').click(function () {
      $('#toggle2').show();
  });
  $('#p2').click(function () {
      $('#p2').hide();
  });  
  $('#toggle3').click(function () {
      $('#p3').show();
  });
  $('#toggle3').click(function () {
      $('#toggle3').hide();
  });

  $('#p3').click(function () {
      $('#toggle3').show();
  });
  $('#p3').click(function () {
      $('#p3').hide();
  });

//hovering effect
$(".four").hover(function () {
  $("#overlay4").show();
})
$(".four").mouseleave(function () {
  $("#overlay4").hide();
})

$(".three").hover(function () {
  $("#overlay3").show();
})
$(".three").mouseleave(function () {
  $("#overlay3").hide();
})


$(".two").hover(function () {
  $("#overlay2").show();
})
$(".two").mouseleave(function () {
  $("#overlay2").hide();
})

$(".one").hover(function () {
  $("#overlay1").show();
})
$(".one").mouseleave(function () {
  $("#overlay1").hide();
})

$(".five").hover(function () {
  $("#overlay5").show();
})
$(".five").mouseleave(function () {
  $("#overlay5").hide();
})

$(".six").hover(function () {
  $("#overlay6").show();
})
$(".six").mouseleave(function () {
  $("#overlay6").hide();
})

$(".seven").hover(function () {
  $("#overlay7").show();
})
$(".seven").mouseleave(function () {
  $("#overlay7").hide();
})

$(".eight").hover(function () {
  $("#overlay8").show();
})
$(".eight").mouseleave(function () {
  $("#overlay8").hide();
})

event.preventDefault();

});  


$(document).ready(function () {
  $('.overlay').mouseover(function () {
      $('#text').show();
  }).mouseout(function () {
      $('#text').hide();
  });
});


$(document).ready(function () {
  $('#submit').click(function () {
      var Name = $('#Name').val();
      var Email = $('#Email').val();
      var Message = $('#Message');
      var key ='43ab10333d46e19325f96d210ed40c49-us5';
      if (Name == '' || Email == '' || Message == '') {
          alert('Please make sure you have filled in the form correctly!');
      } else {
          alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
      }

  });
});

