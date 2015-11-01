$(document).ready(function() {
  var totalWidth = 0;
  var positions = new Array();

  $('#slides .slide').each(function(i) {
    //get slider widths
    positions[i] = totalWidth;
    totalWidth += $(this).width();
    
    // if (!$(this).width()) {
    //   console.log($(this));
    //   return false;
    // };
  });

  $("#slides").width(totalWidth);
  console.log(positions);
  $("#menu ul li a").click(function(e, keepScroll) {
    //remove active class and add inactive
    $("li.product").removeClass('active').addClass('inactive');
    //add active class to parent
    $(this).parent().addClass('active');

    var pos = $(this).parent().prevAll('.product').length;
    console.log($(this).parent().prevAll('.product').length);
    $("#slides").stop().animate({marginLeft: -positions[pos]+"px"}, 450);
    e.preventDefault();

    // if(!autoScroll) clearInterval(itv1);

  
  });

});