var trainSi = null;
var popVideo;
var called = false;

var greentickCount = 0;
$(document).ready(function(){
$(".noSkip1").fadeOut();
$(".finalOptions").fadeOut();
$(".trainButtons").fadeOut();
$(".greenTickButtons").fadeOut();
$(".signalButtons").fadeOut();
$(".twiter").fadeOut();
$(".fb").fadeOut();
popVideo = Popcorn( "#videoPlayerMain" );
$("#videoPlayerMain").attr("src","assets/start.mp4");


$(".startBanner").click(function(){
$(".greymaker").fadeIn();
$(this).fadeOut(function(){popVideo.play();});
});
//console.log(popVideo.duration());


popVideo.cue(73,function(){


$(".noSkip").fadeOut();
$(".videoMain").fadeOut(function(){
$("#videoPlayerMain").attr("src","assets/train.mp4");
$(".poster_1").fadeIn().delay(2000).fadeOut(function(){


$(".videoMain").fadeIn(function(){
popVideo.play(0);


popVideo.cue(12.05,function(){$(".trainButtons").fadeIn();});
popVideo.cue(42.17,function(){
popVideo.pause();



});//stop at 15


});

});//fadeout complete



});//video Fades Out

});//intro video end
//popVideo.play();


$(".checkbox").click(function(){
if($("#signup").val()=="no"){
$("#signup").val("yes");
$(".checkbox").find(".noshow").fadeIn();
}
else{
$("#signup").val("no");
$(".checkbox").find(".noshow").fadeOut();

}


});//checkbod

$(".finalOptions").click(function(){
$(".finalOptions").fadeOut();
var commonsenseStart = ($(this).find(".commonsenseStart").text());
var commonsenseEnd = ($(this).find(".commonsenseEnd").text());


popVideo.destroy();

popVideo = Popcorn( "#videoPlayerMain" );

	$("#videoPlayerMain").attr("src","assets/joined.mp4");

popVideo.play(commonsenseStart);

popVideo.cue(commonsenseEnd,function(){
popVideo.pause();
popVideo.destroy();
$("#videoPlayerMain").fadeOut();

popVideo = Popcorn( "#videoPlayerMain" );


	$(".poster_1").fadeIn().delay(2000).fadeOut(function(){
		$("#videoPlayerMain").attr("src","assets/end.mp4");
$("#videoPlayerMain").fadeIn();
$(".noSkip1").fadeIn();

popVideo.play(0);//play  Video
var v = document.getElementById( "videoPlayerMain" )
v.addEventListener( "ended", function( e ) {

$(".greymaker").fadeOut();
$(".videoMain").fadeOut(function(){
$(".form").fadeIn();

}, false );

});

});




});


});//finalOptions click

$(".greenTickButtons").click(function(){
if($(this).find(".greentick").hasClass("noshow")){
greentickCount++;
$(this).find(".greentick").fadeIn();
$(this).find(".greentick").removeClass("noshow");

if(greentickCount==2){
	$(".greenTickButtons").delay(600).fadeOut(function(){popVideo.play();});
	
	}//clicked both
}

});//greenTickButtons click


$(".signalButtons").click(function(){

$(".signalButtons").fadeOut();
var patienceStart = ($(this).find(".patienceStart").text());
var patienceEnd = ($(this).find(".patienceEnd").text());

popVideo.destroy();

popVideo = Popcorn( "#videoPlayerMain" );

	$("#videoPlayerMain").attr("src","assets/joined-all.mp4");

popVideo.play(patienceStart);

popVideo.cue(patienceEnd,function(){
popVideo.pause();

popVideo.destroy();

popVideo = Popcorn( "#videoPlayerMain" );
$("#videoPlayerMain").fadeOut();
$("#videoPlayerMain").attr("src","assets/traffic_3d.mp4");
$(".poster_1").fadeIn().delay(2000).fadeOut(function(){
	
$("#videoPlayerMain").fadeIn();
popVideo.play(0);//play unblock Video
popVideo.cue(10, function(){
popVideo.pause();

lastGame();

});//end on traffic 3d video

});



});




});//signalButtons click

$(".trainButtons").click(function(){
var startFrom = ($(this).find(".startFrom").text());
var stopAt = ($(this).find(".stopAt").text());

var toleranceStart = ($(this).find(".toleranceStart").text());
var toleranceEnd = ($(this).find(".toleranceEnd").text());



$(".trainButtons").fadeOut(function(){
popVideo.cue(stopAt,function(){
popVideo.pause();

//going to tolerance meter

setTimeout(function(){

console.log("calling timeout");

if(called){return false;}
called = true;

	$("#videoPlayerMain").attr("src","assets/Tolerant_meter.mp4");

popVideo.play(toleranceStart);

popVideo.cue(toleranceEnd,function(){
popVideo.pause();

popVideo.destroy();
$("#videoPlayerMain").fadeOut();
popVideo = Popcorn( "#videoPlayerMain" );

$(".poster_1").fadeIn().delay(2000).fadeOut(function(){
$("#videoPlayerMain").attr("src","assets/unblock.mp4");
$("#videoPlayerMain").fadeIn();
popVideo.play(0);//play unblock Video
popVideo.cue(18, function(){
$(".greymaker").fadeOut();
$(".signalButtons").fadeIn();
popVideo.cue(41, function(){
popVideo.pause();
});

});//end on unblock video

});



});



},100);//timeout
//going to tolerance meter


});

popVideo.play(startFrom);


});//fadeOut $(".trainButtons").





});//trainbuttons click


$(".noSkip").click(function(){

popVideo.pause();
//$(".watching").fadeIn().delay(2000).fadeOut(function(){popVideo.play();});
//$(".noSkip").fadeOut(function(){popVideo.play(73);});
$(".noSkip").fadeOut();
$(".videoMain").fadeOut(function(){
$("#videoPlayerMain").attr("src","assets/train.mp4");
$(".poster_1").fadeIn().delay(2000).fadeOut(function(){


$(".videoMain").fadeIn(function(){
popVideo.play(0);


popVideo.cue(12.05,function(){$(".trainButtons").fadeIn();});
popVideo.cue(42.17,function(){
popVideo.pause();



});//stop at 15


});

});//fadeout complete



});//video Fades Out


});//noSkip click

$(".noSkip1").click(function(){
popVideo.pause();
//$(".watching").fadeIn().delay(2000).fadeOut(function(){popVideo.play();});
$(".noSkip1").fadeOut(function(){
$(".greymaker").fadeOut();
$(".videoMain").fadeOut(function(){
$(".form").fadeIn();});
});
});//noSkip click

$(".popups").fadeOut();

$(".instructions").click(function(){$(this).fadeOut();$(".skipgame").fadeIn();});

$(".skipgame").click(function(){

nextSteps();
});

});//document ready



function nextSteps(){
//alert("next step");
$(".popup").fadeOut();
$(".skipgame").fadeOut();
$(".greymaker").fadeIn();
$(".unblockGame").fadeOut(function(){

popVideo.destroy();
popVideo = Popcorn( "#videoPlayerMain" );
$("#videoPlayerMain").attr("src","assets/block_voiceover.mp4");

$(".poster_1").fadeIn().delay(2000).fadeOut(function(){
	

$(".videoMain").fadeIn(function(){
popVideo.play(0);//play unblock Video
$(".signalButtons").fadeIn();
popVideo.cue(25.5, function(){
popVideo.pause();
});

});//end on unblock video

});




});



}//next steps after unblock game



function lastGame(){
popVideo.destroy();

$("#videoPlayerMain").attr("src","assets/3d_voice_over.mp4");
$(".greenTickButtons").fadeIn();
popVideo = Popcorn( "#videoPlayerMain" );

popVideo.play();

popVideo.cue(3.6,function(){
popVideo.pause();

});//cue stop at certain point

popVideo.cue(4.5,function(){

$(".finalOptions").fadeIn();

});//cue for final buttons

}// last game

function endVideo(){
	
	
}


function formSubmit(){
if($("#yidea").val()==""){alert("Please tell us your idea about using this product");$("#yidea").focus();return false;}
else if($("#usedas").val()==""){alert("Please tell us how it will be used as");$("#usedas").focus();return false;}
else if($("#email").val()==""){alert("Please enter your E-Mail ID");$("#email").focus();return false;}
else if($("#email").val().indexOf("@")==-1 || $("#email").val().indexOf(".")==-1){alert("Please enter a valid E-Mail ID");$("#email").focus();return false;}
else if($("#mobile").val()==""){alert("Please enter your Mobile/Phone Number");$("#mobile").focus();return false;}
else{

$(".popups").fadeIn();

$.post("save.php",{yidea:$("#yidea").val(),usedas:$("#usedas").val(),email:$("#email").val(),mobile:$("#mobile").val(),signup:$("#signup").val()},function(data){
$(".popups").fadeOut();
if(data=="done"){
$(".form").fadeOut(function(){$(".thankyou").fadeIn();
$(".twiter").fadeIn();
$(".fb").fadeIn();});
}//success
else{alert("An error occured. Please try again");}


});//submit

return false;
}

return false;
}