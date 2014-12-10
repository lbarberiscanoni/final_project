$(".menu").click(function(){
  if ($("nav").css("height") === "160px") {
    $("nav").css({height: "0"});
    $("ul").css({opacity: "0"});
    console.log("if works");

  } else {
    $("nav").css({height: "160px", transition: "height 1500ms"});
    $("ul").css({opacity: "1", transition: "opacity 1000ms"});
    console.log("else works");
  }
});