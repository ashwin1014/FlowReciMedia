




	oCanvas.domReady(function () {
	canvas = oCanvas.create({
		canvas: "#gameCanvas",
		background: "#EEE",
		fps:600
	});


var canvasBg = canvas.display.image({
image:"images/bg.png",
width:800,
height:650,
x:0,
y:0
});
canvas.addChild(canvasBg);




var ob1 = canvas.display.rectangle({
x:boundries.x,
y:boundries.y,
width:boundries.dimension,
height:boundries.thickness,
origin:{x:"left",y:"top"},
fill:"#FFFFFF",
move:null,
opacity:boundries.opacity,
objid:"ob1"
});

var ob2 = canvas.display.rectangle({
x:boundries.x,
y:boundries.y+boundries.dimension,
width:boundries.dimension,
height:boundries.thickness,
origin:{x:"left",y:"top"},
fill:"#FFFFFF",
move:null,
opacity:boundries.opacity,
objid:"ob2"
});

var ob3 = canvas.display.rectangle({
x:boundries.x,
y:boundries.y,
width:boundries.thickness,
height:boundries.dimension,
origin:{x:"left",y:"top"},
fill:"#FFFFFF",
move:null,
opacity:boundries.opacity,
objid:"ob3"
});

var ob4 = canvas.display.rectangle({
x:boundries.x+boundries.dimension,
y:boundries.y,
width:boundries.thickness,
height:(boundries.dimension/2)-50,
origin:{x:"left",y:"top"},
fill:"#FFFFFF",
move:null,
opacity:boundries.opacity,
objid:"ob4"
});

var ob5 = canvas.display.rectangle({
x:boundries.x+boundries.dimension,
y:boundries.y+(boundries.dimension/2)+5,
width:boundries.thickness,
height:(boundries.dimension/2)+5,
origin:{x:"left",y:"top"},
fill:"#FFFFFF",
move:null,
opacity:boundries.opacity,
objid:"ob5"
});



var objDestination = canvas.display.rectangle({
x:boundries.x+boundries.dimension,
y:boundries.y+(boundries.dimension/2)-50,
width:boundries.thickness,
height:55,
origin:{x:"left",y:"top"},
fill:"#00FF00",
move:null,
opacity:boundries.opacity,
objid:"Destination"
});



canvas.addChild(ob1);
canvas.addChild(ob2);
canvas.addChild(ob3);
canvas.addChild(ob4);
canvas.addChild(ob5);
canvas.addChild(objDestination);




hitObjs.push(ob1);
hitObjs.push(ob2);
hitObjs.push(ob3);
hitObjs.push(ob4);
hitObjs.push(ob5);
hitObjs.push(objDestination);

createObjects();




canvas.bind("touchend mouseup",function(){endDrag();});






/*------LOOPING--*/
canvas.setLoop(function () {

//console.log(isDown + " -- " + moveObj + " -- " + hasHit);

if(isDown && moveObj!=null && hasHit==false){

if(hitTest(moveObj)==false){
if(moveObj.move=="y"){
moveObj.prevy = moveObj.y;
moveObj.prevx = moveObj.x;


moveObj.y = canvas.mouse.y - diff.y;
}
else{
moveObj.prevy = moveObj.y;
moveObj.prevx = moveObj.x;


moveObj.x = canvas.mouse.x - diff.x;
}
}//if hittest false
else{
moveObj.x = moveObj.prevx;
moveObj.y = moveObj.prevy;

}
}//if down
}).start();
/*------LOOPING--*/

	});



	


