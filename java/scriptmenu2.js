$("#hamburger").click(function(){
        $(".mobilenav").animate({width:"-50%"});
        $(this).hide();
      });
    
      $(".mobilenav").click(function(){
        $(this).animate({width :"0%"});
        $(".mobilenav").animate({width:"100%"});
        $("#hamburger").show();
      });
    