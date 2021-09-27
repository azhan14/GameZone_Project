// $(document).ready(function(){
//   $('#home_content img:gt(0)').hide();
//   setInterval(function(){
//     $('#home_content :first-child').fadeOut()
//     .next('img').fadeIn(1000)
//     .end().appendTo('#home_content');
//   },3000);
// });

$(document).ready(function(){
  $('#home_content img:gt(0)').hide();
  setInterval(function(){
    $('#home_content :first-child').fadeOut(function(){
      $('#home_content :first-child').next('img').fadeIn(1000).end().appendTo('#home_content');
    });
  },3000);
});