$("button.newAlert").click(function(){
	$(".alert_new").toggleClass("show");
});

$("button.deactivate").click(function(){
	$(".alert1").toggleClass("hide");
	$(".alert2").toggleClass("hide");
});

$("button.newContact").click(function(){
	$(".contact_new").toggleClass("show");
});

$("button.delete").click(function(){
	$(this).closest("tr").remove();
});
