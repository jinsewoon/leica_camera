$(function(){
  $(".info_text").mouseover(function(){
        console.log($(this).parents("a").find(".hover_img").find("img"))
        $(this).parents("a").find(".hover_img").find("img").css("display","block");
        $(this).parents("a").find(".info_text h2, .info_text div dl dt, .info_text div dl dd ").css("color","#ffffff");
      }).mouseout(function(){
        $(this).parents("a").find(".hover_img").find("img").css("display","none");
        $(this).parents("a").find(".info_text h2, .info_text div dl dt, .info_text div dl dd ").css("color","#666666");
      });
});
