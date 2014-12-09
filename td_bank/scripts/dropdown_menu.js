$(".menu").click(function(){
	console.log("clicked");
  if ($("nav").css("height") === "200px") {
    $("nav").css({height: "0"});
    $("ul").css({opacity: "0"});
    console.log("if works");

  } else {
    $("nav").css({height: "200px", transition: "height 1000ms"});
    $("ul").css({opacity: "1", transition: "opacity 1000ms"});
    console.log("else works");
  }
});