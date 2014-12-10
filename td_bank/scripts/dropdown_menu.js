$(".menu").click(function(){
  console.log("button works");

  if ($("nav").css("height") === "160px") {
    console.log("if works");
    $("nav").css({height: "0"});
    $("ul").css({opacity: "0"});
    $(".main").css({opacity: "1"});

  } else {
    console.log("else works");
    $(".main").css({opacity: "0"});
    $("nav").css({height: "160px", transition: "height 1500ms"});
    $("ul").css({opacity: "1", transition: "opacity 1000ms"});
  }
});