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
