var popVideo;
var called = false;
var clss;
var time = 0;
$(document).ready(function(){
$(".popups").fadeOut();
popVideo = Popcorn( "#videoPlayerMain" );
//$("#videoPlayerMain").attr("src","assets/Diwali.mp4");
popVideo.play();

popVideo.cue(25.4,function(){
$(".first").fadeIn();
popVideo.cue(34.8,function(){
popVideo.play(26);
});
});

$(".blankButtontrue").click(function(){
$(".first").fadeOut(function(){
popVideo.play(78.6);
popVideo.cue(103,function(){
$(".form").fadeIn();

popVideo.cue(109,function(){
popVideo.play(105);
});


});	
});
});



$(".blankButtonfalse").click(function(){
popVideo.play(36);	
$(".first").fadeOut(function(){
popVideo.cue(75,function(){
$(".peplay").fadeIn();
});
popVideo.cue(76.8,function(){
popVideo.play(75.8);
});		
});
});

$(".peplay").click(function(){
	$(".peplay").fadeOut(function(){
		popVideo.play(18.3);	
	});	
});

$(".skip").click(function(){
	$(".form").fadeOut(function(){
		popVideo.play(110.8);
		var v = document.getElementById( "videoPlayerMain" )
		v.addEventListener( "ended", function( e ) {

$(".last").fadeIn();
});

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

$('#videoPlayerMain').on('loadstart', function (event) {
  $(this).addClass('background');
  $(this).attr("poster", "img/loading-animation.GIF");
});

$('#videoPlayerMain').on('canplay', function (event) {
  $(this).removeClass('background');
  $(this).removeAttr("poster");
});

$(".rept").click(function(){
	popVideo.play(0);
	$(".last").fadeOut();
});

$(".end").click(function(){
	//$(".last").fadeOut();
	window.open("http://www.flowrecimedia.com","_self")
});


});//document ready







function formSubmit(){

if($("#email").val()==""){alert("Please enter your E-Mail ID");$("#email").focus();return false;}

else if($("#idea").val()==""){alert("Please enter your alternative idea....");$("#idea").focus();return false;}

else{

$(".popups").fadeIn();

$.post("save3.php",{email:$("#email").val(),idea:$("#idea").val()},function(data){
$(".popups").fadeOut();
$(".form").fadeOut(function(){
		popVideo.play(110.8);
		var v = document.getElementById( "videoPlayerMain" )
		v.addEventListener( "ended", function( e ) {


$(".last").fadeIn();


});
	});	
if(data=="done"){
alert("Thank you for your successful contribution.");
}//sucess
else{alert("An error occured. Please try again");}


});//submit

return false;
}

return false;
}



