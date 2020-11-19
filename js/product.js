$(function(){

//클릭시 메뉴 드랍 + 십자가 버튼 토글
 $(".product_category").click(function(){
   var categoryBtn = $(this).find(".product_submenu");
   var crossBtn = $(this).find("a");
   if( categoryBtn.hasClass("on") == 0 ){
      $(".product_category").find(".product_submenu").removeClass("on");
      categoryBtn.addClass("on");
       $(".product_category").find("a").removeClass("on");
      crossBtn.addClass("on");
   }else{
     categoryBtn.removeClass("on");
     crossBtn.removeClass("on");
   }
   return false;
 });

$(".product_category:first-child > a").css("color","#000");
  //클릭시 카테고리 메뉴 색변화
 $(".product_category > a").click(function(){
   $(".product_category > a").css("color","#999");

   $(this).addClass("on").css("color","black");
 });

 // 클릭시 서브메뉴 메뉴 색변화
 $(".product_submenu li a").click(function(){
   $(".product_submenu li a").css("color","#999");
   $(this).addClass("on").css("color","black");
   return false;
 });

$(".product_category").click(function(){
  var i = $(this).index() + 2;
  var txt = $(this).children("a").text();

  if($(this).parents(".product_lnb").next().find(".product_item_content").hasClass("on") == true){
    $(".product_category").parents(".product_lnb").next().find(".product_item_content").removeClass("on");
    $(this).parents(".product_lnb").next().find(".product_item_content:nth-child("+i+")").addClass("on");
    $(".product_menu_title").text(txt); //메뉴 타이틀에 클릭한걸로 이름바뀌는거
    //클릭시 카테고리별 배너 이미지 변경 
    $(this).parents(".product_content").prev().children(".product_banner img").removeClass("on");
    $(this).parents(".product_content").prev().children(".product_banner img:nth-child("+i+")").addClass("on");
    console.log()
  }else{
    $(".product_category").parents(".product_lnb").next().find(".product_item_content").removeClass("on");
    $(this).parents(".product_lnb").next().find(".product_item_content:nth-child("+i+")").addClass("on");

  }
});
// .parent(".product_category_box").parent(".product_lnb").next().find(".product_item_content")

// $(".list_title, .list_subtitle").click(function(){
//   if($(this).parent("li").find("div").hasClass("on") == true){
//     $(this).parent("li").find("div").removeClass("on");
//   }else{
//     $(".list_subtitle").parent("li").find("div").removeClass("on");
//     $(this).parent("li").find("div").addClass("on");
//   }
// });

});//---end
