$("button.yes_payment").click(function() {
	alert("Congratulations! You have just successfully paid your bill!");
	$(".confirm_payment").removeClass("show");
});

$("button.yes_transfer").click(function() {
	alert("Congratulations! You have just successfully made your transfer!");
	$(".confirm_transfer").removeClass("show");
});