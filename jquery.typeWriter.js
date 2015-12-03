'use strict';
$.fn.typeWriter = function( speed ){
  return this.each(function(){
    var $ele = $(this),
        captionLength = 0,
        caption = '';
    speed = (speed != undefined) ? speed : 400;// default time
    
    caption = $ele.text();
    
    if(caption){
		type();
    }
    
    function type(){
		$ele.html(caption.substr(0, captionLength++));
		if(captionLength < caption.length+1) {
			setTimeout(function(){
				type();
			},speed);
		} else {
			captionLength = 0;
			caption = '';
		}
    }
 
  });
};
