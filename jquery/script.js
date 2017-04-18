$(document).ready(function(){
  // alert("Good");
  $('.main-container').click(function(){
    $('.arrow').animate({left: '420%'});
  });
$(window).keypress(function (e) {
  if (e.charCode === 32.) {
    e.preventDefault()
    console.log('Space pressed')
  }
});
});
