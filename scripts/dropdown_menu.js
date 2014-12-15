$(".menu").click(function(){
  console.log("button works");

  if ($("nav").css("height") === "250px") {
    console.log("if works");
    $("nav").css({height: "0", transition: "height 1000ms"});
    $("ul").css({opacity: "0", transition: "opacity 1000ms"});
    $("nav").css({display: "none"});
    $(".main").css({opacity: "1"});
    $(".message_center").css({opacity: "1"});

  } else {
    console.log("else works");
    $(".main").css({opacity: "0"});
    $(".message_center").css({opacity: "0"});
    $("nav").css({display: "block"});
    $("nav").css({height: "250px", transition: "height 1500ms"});
    $("ul").css({opacity: "1", transition: "opacity 1000ms"});
  }
});