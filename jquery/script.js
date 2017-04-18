$(document).ready(function(){
  // alert("Good");
  $('.main-container').click(function(){
    $('.arrow').animate({left: '420%'});
  });
$(window).keypress(function (e) {
  if (keyCode === 32) {
    e.preventDefault()
    console.log('Space pressed')
  }
});
});
