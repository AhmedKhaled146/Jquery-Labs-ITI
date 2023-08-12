  /* Task 1*/
$(document).ready(function() {
    $('#colorSpan').css('color', 'blue');
});

/* $(document).ready(function() {
    $('.myClass').css('color', 'red');
}); */

$('div:eq(1)').css('color', 'red');

$('ul:first>li:first').css('color', 'red');

$('ul:first>li:last').css('color', 'orange');

$('ul:first>li:eq(3)').css('color', 'blue');
/*   *******************************************  */
/*   task 2  */

/*one color*/


$('ul:eq(1)>li:last, ul:eq(1)>li:first, ul:eq(1)>li:eq(3)').css('color', 'green');
/* differnt colors */
/* using function */
/*$('ul:eq(1) li:lt(5)').css('color', (index) => ['red', '', '', 'blue', 'orange'][index]);*/

/*   *******************************************  */
/* task 3*/

$('ul:eq(2)>li:eq(0)>a, ul:eq(2)>li:eq(1)>a').css('color', 'green');
/*   *******************************************  */

/* task 4*/
$(document).ready(function() {
  function leftToRight() {
    $('img').animate(
    {
      'left': $('#div3').width() - $('img').width()
    }, 1000,
    function() {
      $('img').animate(
      {
        'left': 0
      }, 1000);
    });
  }

  let timer = null;
  $(':button:eq(0)').click(function() {
    timer = setInterval(leftToRight, 2000);
  });
  $(':button:eq(1)').click(function(){
    clearInterval(timer);
    $('img').stop();
  });
});

/*   *******************************************  */



