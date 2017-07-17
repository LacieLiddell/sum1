window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
  /*  document.addEventListener('showScrSz', Function(e){
    	if (e.nodeName ==="butttonScr"){
    		alert('Разрешение экрана: '+screen.width+'X'+screen.height);
    	}
    });*/

    // Sample code

    
    var butSize = document.querySelector("#butttonScr");
    butSize.addEventListener('click', function() {
    	 var contentText = document.querySelector('#content-text');
    	contentText.innerHTML ='Разрешение экрана: '+screen.width+'X'+screen.height;
    });
    
    var butImg = document.querySelector("#butttonImg");
   butImg.addEventListener('click', function(){
    	var img = document.querySelector('img');
    	if (img.style.display === "none"){
    		img.style.display = "block"
    	} else {
    		img.style.display = "none"
    	}
    });
    
};