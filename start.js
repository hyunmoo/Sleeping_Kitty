$(document).ready(function(){
	
	function next(){
		window.location="01.html";
	};
	
	$("#start").click(function(){
		
		$("#start").effect('clip', {}, 1000);
		setTimeout(next, 1100);
		
	});
});