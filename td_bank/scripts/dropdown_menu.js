$(".menu").click(function(){
  console.log("button works");

  if ($("nav").css("height") === "160px") {
    console.log("if works");
    $("nav").css({display: "block"});
    $("nav").css({height: "0", transition: "height 1000ms"});
    $("ul").css({opacity: "0", transition: "opacity 1000ms"});
    $(".main").css({opacity: "1"});

  } else {
    console.log("else works");
    $(".main").css({opacity: "0"});
    $("nav").css({height: "160px", transition: "height 1500ms"});
    $("ul").css({opacity: "1", transition: "opacity 1000ms"});
  }
});