// open modal

$(document).on('click', '.col', function(){
  var modal = $('.modal');
  // fill the modal

  $(modal).css('display','inline');
});

// close modal

$(document).on('click', '.close-modal', function(){
  var modal = $('.modal');
  $(modal).css('display','none');
});
