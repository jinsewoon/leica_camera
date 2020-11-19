$(function(){
  /*카테고리 클릭시 색 변경 및 고정*/
  $(".lnb_list").click(function(){
    $(".lnb_list").removeClass("on");
    $(this).addClass("on");

 });//---end

  /*게시물 클릭시 토글*/

  $(".list_title, .list_subtitle").click(function(){
    if($(this).parent("li").find("div").hasClass("on") == true){
      $(this).parent("li").find("div").removeClass("on");
    }else{
      $(".list_subtitle").parent("li").find("div").removeClass("on");
      $(this).parent("li").find("div").addClass("on");
    }
  });

/*FAQ menu 클릭시 색 변경*/
  $(".faq_menu ul li").click(function(){
    $(".faq_menu ul li").removeClass("on");
    $(this).addClass("on");
 });//---end


$(".faq_menu ul li").click(function(){
  var a = $(this).index()+1;
  $(".faq_content").removeClass("on");
  $(".faq_content:nth-of-type("+a+")").addClass("on");

  return false;
});


});//---end
