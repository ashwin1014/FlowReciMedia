

$(document).ready(function(){

popVideo = Popcorn( "#videoPlayerMain" );
$("#videoPlayerMain").attr("src","images/t.mp4");

popVideo.play(0);//play  Video
var v = document.getElementById( "videoPlayerMain" )
v.addEventListener( "ended", function( e ) {

popVideo.play(0);

}, false );

});


