var popVideo;
var called = false;
var clss;
var time = 0;
$(document).ready(function(){
$(".popups").fadeOut();
popVideo = Popcorn( "#videoPlayerMain" );
$("#videoPlayerMain").attr("src","assets/scene01.mp4");
popVideo.play();

popVideo.cue(54.7,function(){
popVideo.pause();

$("#videoPlayerMain").attr("src","assets/scene02.mp4");
popVideo.play();

popVideo.cue(3,function(){
	$(".first").fadeIn();
	clss=$(".first");
//popVideo.pause();
popVideo.play(1.9);


});

});

$(".blankButtontrue").click(function(){
	
var startFrom = ($(this).find(".strt").text());
var stopAt = ($(this).find(".stop").text());

	
clss.fadeOut(function(){


popVideo.cue(stopAt,function(){
popVideo.pause();
nextSteps();
});	
	
});
popVideo.play(startFrom);
});


$(".blankButtonfalse").click(function(){
	
var startFrom = ($(this).find(".strt").text());
var stopAt = ($(this).find(".stop").text());
var rlpy = ($(this).find(".rlpy").text()); 
var btn = ($(this).find(".btn").text()); 
popVideo.play(startFrom);	
clss.fadeOut(function(){
popVideo.cue(btn,function(){
$(".peplay").fadeIn();
});
popVideo.cue(stopAt,function(){
//popVideo.pause();

popVideo.play(rlpy);
});	
	
});

});

$(".peplay").click(function(){
	$(".peplay").fadeOut(function(){
		if(time==0){
		popVideo.play(3);}
		else if(time==1){
		popVideo.play(2.5);	
		}else if(time==2){
		popVideo.play(2.5);	
		}else if(time==3){
		popVideo.play(2.5);	
	}
});	

});
togglePause = function(){
if (popVideo.paused()) {
	$(".play").fadeOut();
    popVideo.play();
  }
  else {
    popVideo.pause();
	$(".pause").fadeIn().delay(100).fadeOut(function(){
		$(".play").fadeIn();
	});
  }

}
$(".play").click(function(){
	popVideo.play();
	$(".play").fadeOut();
});
$(".likebtn").click(function(){
	$(".like").fadeOut(function(){
		
		ga('send', 'event', '2nd video', 'like', 'like button click');
		$(".form").fadeIn();
	});
});
$(".dlikebtn").click(function(){
	$(".like").fadeOut(function(){
		
		ga('send', 'event', '2nd video', 'dislike', 'dislike button click');
		$(".form").fadeIn();
	});
});


});//document ready


function nextSteps(){
time = time+1;
if(time==1){
	popVideo.destroy();
	popVideo = Popcorn( "#videoPlayerMain" );
	$("#videoPlayerMain").attr("src","assets/scene03.mp4");
	popVideo.play();
	popVideo.cue(2.9,function(){
	$(".secnd").fadeIn();
	clss=$(".secnd");
	//popVideo.pause();
	popVideo.play(1.9);
	
	});
	
}else if(time==2){
	popVideo.destroy();
	popVideo = Popcorn( "#videoPlayerMain" );
	$("#videoPlayerMain").attr("src","assets/scene04.mp4");
	popVideo.play();
	popVideo.cue(2.5,function(){
	$(".thrd").fadeIn();
	clss=$(".thrd");
	//popVideo.pause();
	popVideo.play(1.9);
	
	});
	
}else if(time==3){
	popVideo.destroy();
	popVideo = Popcorn( "#videoPlayerMain" );
	$("#videoPlayerMain").attr("src","assets/scene05.mp4");
	popVideo.play();
	popVideo.cue(2.8,function(){
	$(".frth").fadeIn();
	clss=$(".frth");
	//popVideo.pause();
	popVideo.play(2);
	
	});
	
}else{
	popVideo.destroy();
	popVideo = Popcorn( "#videoPlayerMain" );
	$("#videoPlayerMain").attr("src","assets/scene06.mp4");
	popVideo.play();
	popVideo.cue(10,function(){
	$(".videoMain").fadeOut(function(){
	$(".like").fadeIn();
	});
	
	
	});
}
	
	
	
};




function formSubmit(){

if($("#email").val()==""){alert("Please enter your E-Mail ID");$("#email").focus();return false;}

else{

$(".popups").fadeIn();

$.post("save2.php",{email:$("#email").val()},function(data){
$(".popups").fadeOut();
if(data=="done"){
alert("Success");
}//sucess
else{alert("An error occured. Please try again");}


});//submit

return false;
}

return false;
}



