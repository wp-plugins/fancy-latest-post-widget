var jQuery =jQuery.noConflict();
jQuery(document).ready(function(){
   jQuery(document).on('widget-updated widget-added', function(){
       jscolor.init();
   	

   });
});
