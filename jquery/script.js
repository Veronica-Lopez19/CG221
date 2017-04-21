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
   $('.main-container').keypress(function(e) {
    if (e.keyCode == '32') {
        $('.arrow').load("");
      // e.preventDefault('animatearrow.html')
     // console.log('Space pressed')

        }
       });
});
