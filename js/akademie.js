$(function(){
  $(".info_text").mouseover(function(){
        console.log($(this).parents("a").find(".hover_img").find("img"))
        $(this).parents("a").find(".hover_img").find("img").css("display","block");
      }).mouseout(function(){
        $(this).parents("a").find(".hover_img").find("img").css("display","none");
      });
});
