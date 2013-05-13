  $(document).ready(function() {
    // $('#go-home').click(function() {
    //     alert("Okay, we'll go home...");
    //     $("#go-home").stop().animate({ opacity: 0.4 });

    // });


    $("#go-home").click(function(){
         window.location=$(this).find("a").attr("href");
         return false;
    });


    $("#go-web-dev").click(function(){
         window.location=$(this).find("a").attr("href");
         return false;
    });

    // $("#go-*").click(function(){
    //      window.location=$(this).find("a").attr("href");
    //      return false;
    // });

    // $("#links-life").hide();
    // $("#header-life").animate({
    //     opacity: 0.6

    // $('#header-skills').click(function() {
    //     $("#links-life").hide();
    //     $("#links-skills").show();
    // });
    // $('#header-life').click(function() {
    //     $("#links-skills").hide();
    //     $("#links-life").show();
    // });


  });