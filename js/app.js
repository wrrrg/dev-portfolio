// slideshow controls

$(document).ready(function() {
  $('.project-div').hide();
  $('#back-arrow').hide();
  $('#project1').show();
  $('#project1').addClass('selected');
});

$(document).on('click', '#forward-arrow', function(){
  var check = $('.selected').attr('id');
  $("#back-arrow").show();

  if(check === 'project4'){
    $('#forward-arrow').hide()
  }else{
      $('.project-div').hide();
      var oldDiv = $('.selected');
      var newDiv = $('.selected').next('.project-div');

      oldDiv.removeClass('selected');
      newDiv.addClass('selected');

      newDiv.show();
  };
});

$(document).on('click', '#back-arrow', function(){
    var check = $('.selected').attr('id');
    $("#forward-arrow").show();

  if(check === 'project1'){
    $('#back-arrow').hide()
  }else{
      $('.project-div').hide();
      var oldDiv = $('.selected');
      var newDiv = $('.selected').prev('.project-div');

      oldDiv.removeClass('selected');
      newDiv.addClass('selected');

      newDiv.show();
  };

});



// close landing modal

$(document).on('click', '.modal-landing', function(){
  var modal = $('.modal-landing');
  // fill the modal

  $(modal).css('display','none');
});

//re-open landing modal

$(document).on('click', '.header-name', function(){
  var modal = $('.modal-landing');
  // fill the modal

  $(modal).css('display','block');
});

// close modal

$(document).on('click', '.close-modal', function(){
  var modal = $('.modal');
  $(modal).css('display','none');
});
