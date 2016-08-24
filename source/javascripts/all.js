$(function(){
	$('#udomi').mixItUp();
	
	// for custom error message on invalid field
	$(document).bind('invalid.zf.abide',function(e) {
	  console.log("Sorry, "+e.target.id+" is not valid");
	});
});