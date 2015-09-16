// console.log("hello world!");
// make sure document has loaded and is ready!!
$(document).ready(function() {
event.preventDefault();


var lineIterator = 1;
var color = false;


// generating the div
$(".generateButton").on("click", function() {
	// console.log("hello");


	// creates new lines
	$(".lineGenerator").append(
		"<div class = \"divCreator\"><span> Line #" + lineIterator + 
		"</span></div><br><button class = \"buttonColor\">Change Color</button> <button class = \"removeItem\">Remove</button>"
		);

	lineIterator++;
	// console.log(lineIterator);

});

	// turn box color green
$(".lineGenerator").on("click", ".buttonColor", function() {

	

	if(color === false){
	$(this).prev().prev().addClass("colorGreen");
	color = true;
	// console.log("done");
} else {
	$(this).prev().prev().removeClass("colorGreen");
	color = false;
}

});
	

$(".lineGenerator").on("click", ".removeItem", function() {
	

	$(this).prev().prev().prev().hide();
	$(this).prev().prev().hide();
	$(this).prev().hide();
	$(this).hide();
});








});