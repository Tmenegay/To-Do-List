//Tylor Menegay 5/8/2020

//Check Off Specific To-Dos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to Delete To-Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); });
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new to do text from the input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".glyphicon-plus").click(function(){
	$("input[type='text'").fadeToggle();
});