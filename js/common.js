$(function(){
  $("#btn_store").click(function(){
    if($(".upper_drop").attr("title") == "drop01"){
      $(".upper_drop").slideDown();
      $(".upper_drop").attr("title","drop02");
    }else if($(".upper_drop").attr("title") == "drop02"){
      $(".upper_drop").slideUp();
      $(".upper_drop").attr("title","drop01");
    }
  });

});
