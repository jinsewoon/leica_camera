$(function(){
  /*카테고리 클릭시 색 변경 및 고정*/
  $(".lnb_list").click(function(){
    $(".lnb_list").removeClass("on");
    $(this).addClass("on");

 });//---end

  /*게시물 클릭시 토글*/

  $(".list_title").click(function(){
    if($(this).parent("li").find("div").hasClass("on") == true){
      $(this).parent("li").find("div").removeClass("on");
    }else{
      $(".list_title").parent("li").find("div").removeClass("on");
      $(this).parent("li").find("div").addClass("on");
    }
  });
});//---end
