var isDown = false;
var moveObj = null;
var hasHit = false;
var hitObjs = [];
var diff = {};
var boundries = {x:248,y:105,dimension:323,thickness:10,opacity:1};


var lvlid = 0;
var levels = [
{
	obstacles:[
		{img:"bluecar.png",w:99,h:41,m:"x",x:262,y:121,objid:"lvl1obj1"},
		{img:"truckorange.png",w:52,h:144,m:"y",x:262,y:164,objid:"lvl1obj2"},
		{img:"greencar.png",w:49,h:99,m:"y",x:262,y:309,objid:"lvl1obj3"},
		{img:"ambulanceSprite.png",w:104,h:42,m:"x",x:315,y:224,objid:"Ambulance"},
		{img:"truckorange.png",w:52,h:144,m:"y",x:420,y:164,objid:"lvl1obj4"},
		{img:"truckorange.png",w:52,h:144,m:"y",x:497,y:121,objid:"lvl1obj5"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:465,y:309,objid:"lvl1obj6"},
		{img:"van.png",w:149,h:54,m:"x",x:365,y:370,objid:"lvl1obj7"}

	]
},
{
	obstacles:[
		{img:"ambulanceSprite.png",w:104,h:42,m:"x",x:262,y:227,objid:"Ambulance"},
		{img:"van.png",w:149,h:54,m:"x",x:415,y:116,objid:"lvl2obj4"},
		{img:"van.png",w:149,h:54,m:"x",x:260,y:273,objid:"lvl2obj2"},
		{img:"greencar.png",w:49,h:99,m:"y",x:260,y:116,objid:"lvl2obj1"},
		{img:"greencar.png",w:49,h:99,m:"y",x:415,y:176,objid:"lvl2obj5"},
		{img:"greencar.png",w:49,h:99,m:"y",x:465,y:226,objid:"lvl2obj5"},
		{img:"greencar.png",w:49,h:99,m:"y",x:362,y:328,objid:"lvl2obj9"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:260,y:384,objid:"lvl2obj3"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:413,y:384,objid:"lvl2obj6"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:460,y:340,objid:"lvl2obj7"},
		{img:"truck.png",w:49,h:144,m:"y",x:520,y:176,objid:"lvl2obj8"}


	]
},
{
	obstacles:[
		{img:"ambulanceSprite.png",w:104,h:42,m:"x",x:312,y:227,objid:"Ambulance"},
		{img:"greencar.png",w:49,h:99,m:"y",x:312,y:317,objid:"lvl3obj1"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:312,y:270,objid:"lvl3obj2"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:362,y:372,objid:"lvl3obj3"},
		{img:"truck.png",w:49,h:144,m:"y",x:417,y:227,objid:"lvl3obj4"},
		{img:"truck.png",w:49,h:144,m:"y",x:520,y:270,objid:"lvl3obj5"}


	]
},
{
	obstacles:[
		{img:"ambulanceSprite.png",w:104,h:42,m:"x",x:312,y:227,objid:"Ambulance"},
		{img:"van.png",w:149,h:54,m:"x",x:417,y:270,objid:"lvl4obj1"},
		{img:"van.png",w:149,h:54,m:"x",x:367,y:370,objid:"lvl4obj2"},
		{img:"greencar.png",w:49,h:99,m:"y",x:367,y:270,objid:"lvl4obj3"},
		{img:"greencar.png",w:49,h:99,m:"y",x:517,y:325,objid:"lvl4obj4"},
		{img:"truck.png",w:49,h:144,m:"y",x:262,y:116,objid:"lvl4obj5"},
		{img:"truck.png",w:49,h:144,m:"y",x:417,y:116,objid:"lvl4obj6"}


	]
},
{
	obstacles:[
		{img:"ambulanceSprite.png",w:104,h:42,m:"x",x:312,y:227,objid:"Ambulance"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:259,y:116,objid:"lvl5obj1"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:470,y:342,objid:"lvl5obj2"},
		{img:"bluecar.png",w:99,h:41,m:"x",x:470,y:384,objid:"lvl5obj3"},
		{img:"van.png",w:149,h:54,m:"x",x:312,y:270,objid:"lvl5obj4"},
		{img:"greencar.png",w:49,h:99,m:"y",x:521,y:116,objid:"lvl5obj5"},
		{img:"greencar.png",w:49,h:99,m:"y",x:521,y:216,objid:"lvl5obj6"},
		{img:"greencar.png",w:49,h:99,m:"y",x:260,y:325,objid:"lvl5obj7"},
		{img:"truck.png",w:49,h:144,m:"y",x:417,y:116,objid:"lvl5obj8"},
		{img:"truck.png",w:49,h:144,m:"y",x:467,y:158,objid:"lvl5obj9"},
		{img:"truck.png",w:49,h:144,m:"y",x:259,y:158,objid:"lvl5obj10"}/**/


	]
}



];