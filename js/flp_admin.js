var jQuery =jQuery.noConflict();
jQuery(document).ready(function(){


function addWidgetCSS(){
	var widgetCSS = new Array();
	jQuery(".widget").each(function(){
	widgetCSS.push(jQuery(this));
	});


	for(var x=0; x<widgetCSS.length; x++){
   	if(widgetCSS[x].attr('id').indexOf("fancy_latest_post")>= 0){
              	widgetCSS[x].addClass("fancy_latest_post");
		
		}
 
		}

	

}
addWidgetCSS();

   jQuery(document).on('widget-updated widget-added', function(){
       jscolor.init();
   	addWidgetCSS();

   });
});
