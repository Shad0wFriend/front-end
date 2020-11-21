$(document).ready(function() {
  $("#container").css({'width' : '100px', 'height' : '100px', 'color' : 'green', 'border' : '1px solid red'});
  $("#container").click(function(){
    var container = $(this);
    if(container.data('clicked')) {
      $(this).css({'border' : '1px solid red'}).text('I am not clicked'); 
      container.data('clicked', false);
    }     
    else {
      container.data('clicked', true);
      $(this).css({'border' : '1px dashed purple'}).text('I am clicked');
    }
  });
  $("#button").css({'position' : 'relative', 'top' : '-70px', 'left' : '150px', 'padding' : '10px 20px'});
  $("#button").click(function() {
    alert('Your data is sent');
  });
});