
( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.popup-active' ),
                page = document.getElementsByClassName( 'page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
} () );
var startTime;
var checkTime;
var canvasText=document.getElementById("drawText");
var canvasCell = document.getElementById("drawCell");
var canvasShape = document.getElementById("drawShape");
var x=canvasText.getContext("2d");
var y = canvasCell.getContext('2d');
var z = canvasShape.getContext('2d');
x.font='15px Verdana';
x.fillText("Tizen", 60, 40);
x.font='15px Verdana';
x.fillStyle = "blue";
x.fillText("JavaScript", 60, 45);
x.font='20px Arial';
x.fillStyle = "red";
x.fillText("HTML5", 15, 100);
x.font='15px Arial';
x.fillStyle = "blue";
x.fillText("canvas", 80, 110);

var i, j;
y.fillStyle = "black";
y.fillRect(0, 0, 300, 150);
for (i = 0; i<300; i+=10){
	for (j =0; j<150; j+=10){
		
		//if 
	}
	
}


$('#two').css({'font-size':'15px', 'font-family':'Arial', 'color':'red'});
$('#change').click(function() { 
	$('#two').css({'color':'black'});	
});

$('#dropLogo').draggable();
$('#text').droppable({
	drop:function(){
		$('#header').css('color','red');
	}
});

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

