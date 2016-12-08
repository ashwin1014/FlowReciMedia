function hitTest(obj){




for(var i=0;i<hitObjs.length;i++){

var nextx = hitObjs[i].x;
var nexty = hitObjs[i].y;




nextxw = nextx+hitObjs[i].width;
nextyh = nexty+hitObjs[i].height;

var careax = obj.x;
var careaxw = obj.x+obj.width;
var careay = obj.y;
var careayh = obj.y+obj.height;


	if((!(nextxw < careax ||
          careaxw < nextx ||
          nextyh < careay ||
          careayh < nexty )) && 
		  hasHit==false		 &&
		  hitObjs[i].objid!=obj.objid){
	hasHit = true;

if(hitObjs[i].objid=="Destination" && obj.objid=="Ambulance"){
obj.animate({
		x: 900
	}, {
		easing: "ease-in-out-cubic",
		queue: "move"
	});

	if(lvlid==(levels.length-1)){
$(".nextButton").find("a").attr("href","Javascript:nextSteps()").text("Continue").attr("onClick","");
$("#medalText").html("<h1>Good Job!</h1>You have completed all the levels.");
}//levels Over


$(".popup").fadeIn();
}//when ambulance reaches the destination

		return true;}

}//for blockades

return false;
}//hitfriends



function endDrag(){
	
isDown = false;

moveObj = null;

hasHit = false;

}//end drag

function createObjects(){
var hitid = 6


var curLevel = levels[lvlid];

for(var i=0;i<curLevel.obstacles.length;i++){



var obst = curLevel.obstacles[i];
var spriteAnim = false;

if(obst.objid!="Ambulance"){
hitObjs[hitid] = canvas.display.image({
image:"images/" + obst.img,
x:obst.x,
y:obst.y,
width:obst.w,
height:obst.h,
origin:{x:"left",y:"top"},
move:obst.m,
prevx:obst.x,
prevy:obst.y,
objid:obst.objid/*,
stroke:"inside 1px #FF0000"*/
});

}//if not movver object
else{


hitObjs[hitid] = canvas.display.sprite({
image:"images/" + obst.img,
x:obst.x,
y:obst.y,
width:obst.w,
height:obst.h,
origin:{x:"left",y:"top"},
move:obst.m,
prevx:obst.x,
prevy:obst.y,
objid:obst.objid,
generate:true,
direction: "y",
	duration: 60
});


 spriteAnim = true;

}//if mover object


canvas.addChild(hitObjs[hitid]);

if(spriteAnim){hitObjs[hitid].start();}

hitObjs[hitid].bind("touchstart mousedown",function(){
diff.x= canvas.mouse.x - this.x;
diff.y = canvas.mouse.y - this.y;
isDown = true;
moveObj = this;
});
hitObjs[hitid].bind("touchend mouseup",function(){endDrag();});


hitid++;


}//for loop i

}//createObjects


function nextLevel(){

var hitid = 6


var curLevel = levels[lvlid];

for(var i=0;i<curLevel.obstacles.length;i++){



canvas.removeChild(hitObjs[hitid]);


hitid++;


}//for loop i



hitObjs.splice(6,(curLevel.obstacles.length+6));


lvlid++;




createObjects();
$(".popup").fadeOut();

}//nextLevel()