$(document).ready(function(){
  // alert("Good");
  $('.main-container').click(function(){
    $('.arrow').animate({left: '420%'});
  });
 // $(document).keypress(function (e) {
 // if (e.keyCode == 0 ||e.keyCode === 32) {
   // e.preventDefault()
   // console.log('Space pressed')
  //}
//});
  //$(window).keypress(function(e) {
   // if (e.keyCode == '32') {
       // $('.arrow').css.load("animatearrow.css");
      // e.preventDefault('animatearrow.html')
     // console.log('Space pressed')
 $(document).keydown(function(e) {
          if (e.keyCode == '32') {
            alert('space')
        }
       });
});
