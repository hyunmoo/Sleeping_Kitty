$(document).ready(function(){
	
	var count = 0;
	var cat_count = 0;
	var dragAmount = 0;
	var oldX = 0;
	var oldY = 0;
	var phase = 0;
	var milk_next = function(){
			$("#milk1").fadeOut("slow");
			$("#milk2").fadeIn("slow");					
	};
	var milk_next2 = function(){
			$("#milk2").fadeOut("slow");
			$("#milk3").fadeIn("slow");
	};
	var milk_next3 = function(){
			$("#milk3").fadeOut("slow");
			$("#milk4").fadeIn("slow");
	};
	var milk_next4 = function(){
			$("#milk4").fadeOut("slow");
			$("#milk5").fadeIn("slow");
			$("#mom2").fadeOut("slow");
			$("#mom3").fadeIn("slow");
			$("#font_7").fadeIn("slow");		
	};			
	var brush_next = function(){
		$("#font_6").fadeIn("slow");
		$("#mom2").fadeOut("slow");
		$("#mom3").fadeIn("slow");

	};
	var fade_out_next = function(){
		$("#cat3").animate({'top':'720px', 'left' : '70px'}, 1000);
	};
	var fade_out_next2 = function(){
		$("#cat4").animate({'top':'720px', 'left' : '350px'}, 1000);
		$("#mom2").fadeIn("slow");
		$("#brush1").fadeIn("slow");
	};	
	
	var cat_next1 = function(){
		$("#cat1").fadeOut("slow");
		$("#cat2").animate({'top':'-35px', 'left' : '625px'}, 1000);
		$("#speechbubble0").fadeOut("slow");
		$("#speechbubble1").fadeIn("slow");
		$("#cat3").fadeIn("slow");
		$("#cat3").effect('bounce', {times:3}, 1500);
	};
	var cat_next2 = function(){
		$("#cat2").fadeOut("slow");
		$("#speechbubble1").fadeOut("slow");
		$("#cat4").fadeIn("slow");
		$("#cat4").effect('bounce', {times:3}, 1500);
		$("#total").fadeIn("fast");
	};
	
	$("#font_2").fadeOut("fast");	
	$("#font_3").fadeOut("fast");
	$("#font_4").fadeOut("fast");
	$("#font_5").fadeOut("fast");
	$("#font_6").fadeOut("fast");
	$("#font_7").fadeOut("fast");
	$("#font_8").fadeOut("fast");
	$("#font_9").fadeOut("fast");
	$("#font_10").fadeOut("fast");
	$("#font_11").fadeOut("fast");
	$("#font_12").fadeOut("fast");
	$("#font_13").fadeOut("fast");
	$("#star").fadeOut("fast");
	$("#speechbubble0").fadeOut("fast");
	$("#speechbubble1").fadeOut("fast");
	$("#speechbubble3").fadeOut("fast");
	$("#speechbubble4").fadeOut("fast");
	$("#speechbubble5").fadeOut("fast");	
	$("#speechbubble6").fadeOut("fast");			
	$("#cat1").fadeOut("fast");
	$("#cat2").fadeOut("fast");
	$("#cat3").fadeOut("fast");
	$("#cat3_1").fadeOut("fast");
	$("#cat3_2").fadeOut("fast");
	$("#cat3_3").fadeOut("fast");	
	$("#cat4").fadeOut("fast");
	$("#cat4_1").fadeOut("fast");
	$("#cat4_2").fadeOut("fast");
	$("#cat4_3").fadeOut("fast");
	$("#mom1").fadeOut("fast");
	$("#mom2").fadeOut("fast");
	$("#mom3").fadeOut("fast");
	$("#brush1").fadeOut("fast");
	$("#brush2").fadeOut("fast");
	$(".milk").fadeOut("fast");
	$("#music").fadeOut("fast");
	$("#music2").fadeOut("fast");
	$("#music3").fadeOut("fast");
	$("#music4").fadeOut("fast");
	
	$("#total").click(function(){
		
		if(count === 0){
			$("#font_1").fadeOut("slow");
			$("#bg_1").fadeOut("slow");
			$("#font_2").fadeIn("slow");
			count++;			
		}else if(count === 1){
			$("#font_2").fadeOut("slow");
			$("#bg_2").fadeOut("slow");
			$("#font_3").fadeIn("slow");
			count++;
		}else if(count === 2){
			$("#font_3").fadeOut("slow");
			$("#bg_3").fadeOut("slow");
			$("#mom1").fadeIn("slow");
			$("#font_4").fadeIn("slow");
			count++;			
		}else if(count === 3){
			$("#total").fadeOut("fast");
			$("#font_4").fadeOut("slow");
			$("#speechbubble0").fadeIn("slow");
			$("#cat1").fadeIn("slow");
			$("#cat2").fadeIn("slow");
			count++;
		}else if(count === 4){
			$("#speechbubble3").fadeIn("slow");
			count++;
		}else if(count === 5){
			$("#speechbubble3").fadeOut("slow");
			$("#speechbubble4").fadeIn("slow");
			count++;
		}else if(count === 6){
			$("#speechbubble4").fadeOut("slow");
			$("#mom1").fadeOut("slow");
			$("#font_5").fadeIn("slow");
			count++;
		}else if(count === 7){
			$("#font_5").effect('drop',{}, 1000);
			setTimeout(fade_out_next, 1020);
			setTimeout(fade_out_next2, 2020);	
			count++;
		}else if(count === 8){
			if(cat_count === 2){
				$("#font_6").fadeOut("slow");
				count++;				
			}
		}else if(count === 9){
			$("#brush1").fadeOut("slow");
			$("#cat3_2").fadeOut("slow");
			$("#cat4_2").fadeOut("slow");
			$("#cat3_3").fadeIn("slow");
			$("#cat4_3").fadeIn("slow");
			$("#speechbubble5").fadeIn("slow");
			count++;
			//alert(count);
		}else if(count === 10){
			$("#speechbubble5").fadeOut("slow");
			count++;
		}else if(count === 11){
			$("#speechbubble6").fadeIn("slow");
			$("#mom3").fadeOut("slow");
			$("#mom2").fadeIn("slow");			
			count++;
		}else if(count === 12){
			cat_count = 0;
			$("#speechbubble6").fadeOut("slow");
			$("#milk1").fadeIn("slow");
			$("#cat3_3").click(function(){
				$("#cat3_3").animate({'top':'710px', 'left' : '770px'}, 1000);
				if(cat_count === 0){
					setTimeout(milk_next, 1050);
					setTimeout(milk_next2, 2050);
					cat_count++;
				}else if(cat_count === 1){
					setTimeout(milk_next3, 1050);	
					setTimeout(milk_next4, 2050);
					count++;
					//alert(count);			
				}
				setTimeout(function(){
					$("#cat3_3").fadeOut("slow");
					$("#cat3_2").fadeIn("slow");
				},3050);
			});	
	
			$("#cat4_3").click(function(){
				$("#cat4_3").animate({'top':'710px', 'left' : '760px'}, 1000);		
				if(cat_count === 0){
					setTimeout(milk_next, 1050);
					setTimeout(milk_next2, 2050);
					cat_count++;
				}else if(cat_count === 1){
					setTimeout(milk_next3, 1050);	
					setTimeout(milk_next4, 2050);
					count++;
					//alert(count);								
				}
				setTimeout(function(){
					$("#cat4_3").fadeOut("slow");
					$("#cat4_2").fadeIn("slow");
				},3050);				
			});	
		}else if(count === 13){
			$("#mom3").fadeOut("fast");
			$("#font_7").fadeOut("fast");
			$("#cat3_2").fadeOut("fast");
			$("#cat4_2").fadeOut("fast");
			$("#milk5").fadeOut("fast");
			$("#bg_4").fadeOut("slow");
			count++;
		}else if(count === 14){
			$("#font_8").fadeIn("slow");
			count++;
		}else if(count === 15){
			$("#font_8").fadeOut("slow");
			$("#font_9").fadeIn("slow");
			count++;
		}else if(count === 16){
			$("#total").fadeOut("slow");
			$("#font_9").fadeOut("slow");	
			$("#music").fadeIn("slow");
			setTimeout(function(){				
				$("#music2").fadeIn("slow");
				$("#font_10").fadeIn("slow");
				},1050);
			setTimeout(function(){	
				$("#bg_5").fadeOut("slow");			
				$("#music3").fadeIn("slow");
				$("#font_10").fadeOut("slow");
				$("#font_11").fadeIn("slow");
				},3550);	
			setTimeout(function(){
				$("#bg_6").fadeOut("slow");
				$("#music4").fadeIn("slow");
				},5550);
			setTimeout(function(){
				$("#font_11").fadeOut("slow");
				$("#music").fadeOut("slow");
				$("#music2").fadeOut("slow");
				$("#music3").fadeOut("slow");
				$("#music4").fadeOut("slow");
				$("#star").fadeIn("slow");
				$("#font_12").fadeIn("slow");
				$("#font_13").fadeIn("slow");
				},7550);
		}
		
	});

	$("#star").click(function(){
		$("#star").effect('highlight', {}, 1500);
		setTimeout(function(){
			window.location="index.html";
			},1520);		
	});		
	$("#cat1").click(function(){
		$("#cat1").effect('bounce', {times:3}, 1000);
		setTimeout(cat_next1, 1020);	
	});	
	
	$("#cat2").click(function(){
		$("#cat2").effect('bounce', {times:3}, 1000);
		setTimeout(cat_next2, 1020);	
	});	
	
	$("#brush1").click(function(){
		$("#brush1").fadeOut("slow");
		$("#brush2").fadeIn("slow");
	});
	
	$("#brush2").draggable({
        drag:function(e,u){
            var dX = Math.abs(event.pageX - oldX);
			var dY = Math.abs(event.pageY - oldY);
			dragAmount += dX + dY;
			oldX = event.pageX;
			oldY = event.pageY;
			if(event.pageX < 350){
				if (dragAmount > 5000 && phase == 0) {
					$("#cat3").fadeOut("slow");
					$("#cat3_1").fadeIn("slow");
					phase = 1;
				}else if(dragAmount > 10000 && phase == 1){
					$("#cat3_1").fadeOut("slow");
					$("#cat3_2").fadeIn("slow");
					cat_count++;
					phase = 0;
					dragAmount = 0;
				}
			}else if(350 < event.pageX < 800){
				if (dragAmount > 5000 && phase == 0) {
					$("#cat4").fadeOut("slow");
					$("#cat4_1").fadeIn("slow");
					phase = 1;
				}else if(dragAmount > 10000 && phase == 1){
					$("#cat4_1").fadeOut("slow");
					$("#cat4_2").fadeIn("slow");
					cat_count++;
					phase = 0;
					dragAmount = 0;
				}				
			}
        },
        stop:function(e,u){
			$("#brush2").fadeOut("slow");
			$("#brush2").animate({'top':'820px', 'left' : '900px'}, 1000);
			$("#brush1").fadeIn("slow");
			if(cat_count === 2){
				brush_next();
			}
			
        }
    });	
});