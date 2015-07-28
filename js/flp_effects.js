var jQuery =jQuery.noConflict();
jQuery(document).ready(function(){

/*Add effects to the Image*/
var imgClass = new Array();
jQuery(".flp_img").each(function(){
imgClass.push(jQuery(this));
});

for(var i=0; i<imgClass.length; i++){
switch(imgClass[i].attr("class")){
     case 'flp_img 0':
     jQuery(imgClass[i]).addClass("no-effect");
     break;

     case 'flp_img 1':
     jQuery(imgClass[i]).addClass("hvr-grow");
     break;

     case 'flp_img 2':
     jQuery(imgClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_img 3':
     jQuery(imgClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_img 4':
     jQuery(imgClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_img 5':
     jQuery(imgClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_img 6':
     jQuery(imgClass[i]).addClass("hvr-push");
     break;

     case 'flp_img 7':
     jQuery(imgClass[i]).addClass("hvr-pop");
     break;

     case 'flp_img 8':
     jQuery(imgClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_img 9':
     jQuery(imgClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_img 10':
     jQuery(imgClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_img 11':
     jQuery(imgClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_img 12':
     jQuery(imgClass[i]).addClass("hvr-float");
     break;

     case 'flp_img 13':
     jQuery(imgClass[i]).addClass("hvr-sink");
     break;

     case 'flp_img 14':
     jQuery(imgClass[i]).addClass("hvr-bob");
     break;

     case 'flp_img 15':
     jQuery(imgClass[i]).addClass("hvr-hang");
     break;

     case 'flp_img 16':
     jQuery(imgClass[i]).addClass("hvr-skew");
     break;

     case 'flp_img 17':
     jQuery(imgClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_img 18':
     jQuery(imgClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_img 19':
     jQuery(imgClass[i]).addClass("hvr-wobble-horizontal");
     break;

     case 'flp_img 20':
     jQuery(imgClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_img 21':
     jQuery(imgClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_img 22':
     jQuery(imgClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_img 23':
     jQuery(imgClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_img 24':
     jQuery(imgClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_img 25':
     jQuery(imgClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_img 26':
     jQuery(imgClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_img 27':
     jQuery(imgClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_img 28':
     jQuery(imgClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End of Add effects to the Image*/
var titleClass = new Array();
jQuery(".flp_title").each(function(){
titleClass.push(jQuery(this));
});

for(var i=0; i<titleClass.length; i++){
switch(titleClass[i].attr("class")){
     case 'flp_title 0':
     jQuery(titleClass[i]).addClass("no-effect");
     break;

     case 'flp_title 1':
     jQuery(titleClass[i]).addClass("hvr-grow");
     break;

     case 'flp_title 2':
     jQuery(titleClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_title 3':
     jQuery(titleClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_title 4':
     jQuery(titleClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_title 5':
     jQuery(titleClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_title 6':
     jQuery(titleClass[i]).addClass("hvr-push");
     break;

     case 'flp_title 7':
     jQuery(titleClass[i]).addClass("hvr-pop");
     break;

     case 'flp_title 8':
     jQuery(titleClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_title 9':
     jQuery(titleClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_title 10':
     jQuery(titleClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_title 11':
     jQuery(titleClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_title 12':
     jQuery(titleClass[i]).addClass("hvr-float");
     break;

     case 'flp_title 13':
     jQuery(titleClass[i]).addClass("hvr-sink");
     break;

     case 'flp_title 14':
     jQuery(titleClass[i]).addClass("hvr-bob");
     break;

     case 'flp_title 15':
     jQuery(titleClass[i]).addClass("hvr-hang");
     break;

     case 'flp_title 16':
     jQuery(titleClass[i]).addClass("hvr-skew");
     break;

     case 'flp_title 17':
     jQuery(titleClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_title 18':
     jQuery(titleClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_title 19':
     jQuery("#flp_title").addClass("hvr-wobble-horizontal");
     break;

     case 'flp_title 20':
     jQuery(titleClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_title 21':
     jQuery(titleClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_title 22':
     jQuery(titleClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_title 23':
     jQuery(titleClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_title 24':
     jQuery(titleClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_title 25':
     jQuery(titleClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_title 26':
     jQuery(titleClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_title 27': 
     jQuery(titleClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_title 28':
     jQuery(titleClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End of title Animation*/

/*content Animation*/
var contentClass = new Array();
jQuery(".flp_content").each(function(){
contentClass.push(jQuery(this));
});

for(var i=0; i<contentClass.length; i++){
switch(contentClass[i].attr("class")){
     case 'flp_content 0':
     jQuery(contentClass[i]).addClass("no-effect");
     break;

     case 'flp_content 1':
     jQuery(contentClass[i]).addClass("hvr-grow");
     break;

     case 'flp_content 2':
     jQuery(contentClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_content 3':
     jQuery(contentClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_content 4':
     jQuery(contentClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_content 5':
     jQuery(contentClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_content 6':
     jQuery(contentClass[i]).addClass("hvr-push");
     break;

     case 'flp_content 7':
     jQuery(contentClass[i]).addClass("hvr-pop");
     break;

     case 'flp_content 8':
     jQuery(contentClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_content 9':
     jQuery(contentClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_content 10':
     jQuery(contentClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_content 11':
     jQuery(contentClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_content 12':
     jQuery(contentClass[i]).addClass("hvr-float");
     break;

     case 'flp_content 13':
     jQuery(contentClass[i]).addClass("hvr-sink");
     break;

     case 'flp_content 14':
     jQuery(contentClass[i]).addClass("hvr-bob");
     break;

     case 'flp_content 15':
     jQuery(contentClass[i]).addClass("hvr-hang");
     break;

     case 'flp_content 16':
     jQuery(contentClass[i]).addClass("hvr-skew");
     break;

     case 'flp_content 17':
     jQuery(contentClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_content 18':
     jQuery(contentClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_content 19':
     jQuery(contentClass[i]).addClass("hvr-wobble-horizontal");
     break;

     case 'flp_content 20':
     jQuery(contentClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_content 21':
     jQuery(contentClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_content 22':
     jQuery(contentClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_content 23':
     jQuery(contentClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_content 24':
     jQuery(contentClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_content 25':
     jQuery(contentClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_content 26':
     jQuery(contentClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_content 27': 
     jQuery(contentClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_content 28':
     jQuery(contentClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End Content Animation*/

/*Start Button Animation*/
var buttonClass = new Array();
jQuery(".flp_button").each(function(){
buttonClass.push(jQuery(this));
});

for(var i=0; i<buttonClass.length; i++){
switch(buttonClass[i].attr("class")){
     case 'flp_button 0':
     jQuery(buttonClass[i]).addClass("no-effect");
     break;

     case 'flp_button 1':
     jQuery(buttonClass[i]).addClass("hvr-grow");
     break;
 
     case 'flp_button 2':
     jQuery(buttonClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_button 3':
     jQuery(buttonClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_button 4':
     jQuery(buttonClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_button 5':
     jQuery(buttonClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_button 6':
     jQuery(buttonClass[i]).addClass("hvr-push");
     break;

     case 'flp_button 7':
     jQuery(buttonClass[i]).addClass("hvr-pop");
     break;

     case 'flp_button 8':
     jQuery(buttonClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_button 9':
     jQuery(buttonClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_button 10':
     jQuery(buttonClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_button 11':
     jQuery(buttonClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_button 12':
     jQuery(buttonClass[i]).addClass("hvr-float");
     break;

     case 'flp_button 13':
     jQuery(buttonClass[i]).addClass("hvr-sink");
     break;

     case 'flp_button 14':
     jQuery(buttonClass[i]).addClass("hvr-bob");
     break;

     case 'flp_button 15':
     jQuery(buttonClass[i]).addClass("hvr-hang");
     break;

     case 'flp_button 16':
     jQuery(buttonClass[i]).addClass("hvr-skew");
     break;

     case 'flp_button 17':
     jQuery(buttonClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_button 18':
     jQuery(buttonClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_button 19':
     jQuery(buttonClass[i]).addClass("hvr-wobble-horizontal");
     break;

     case 'flp_button 20':
     jQuery(buttonClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_button 21':
     jQuery(buttonClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_button 22':
     jQuery(buttonClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_button 23':
     jQuery(buttonClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_button 24':
     jQuery(buttonClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_button 25':
     jQuery(buttonClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_button 26':
     jQuery(buttonClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_button 27': 
     jQuery(buttonClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_button 28':
     jQuery(buttonClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End Button Animation*/
/*Post Aligment*/
var containerWidth = new Array();
jQuery(".flp_latest_post").each(function(){
containerWidth.push(jQuery(this));
});

for(var i=0; i<containerWidth.length; i++){

if(containerWidth[i].width() >= 800){
jQuery(containerWidth[i]).addClass("horizontal");
}
}

/*End of Post Aligment*/

/*CSS changes and Colors*/
/*title Color*/
var titleColor = new Array();
jQuery('.titleColor').each(function(){
titleColor.push(jQuery(this));
});

var titleColorSelector = new Array();
jQuery('.flp_title a').each(function(){
titleColorSelector.push(jQuery(this));
});

for(var i = 0; i<titleColorSelector.length; i++){
jQuery(titleColorSelector[i]).css("color", "#"+titleColor[i].html());
}
/*End Title Color*/

/*Content Color*/
var contentColor = new Array();
jQuery('.contentColor').each(function(){
contentColor.push(jQuery(this));
});

var contentColorSelector = new Array();
jQuery(".flp_content p").each(function(){
contentColorSelector.push(jQuery(this));
});

for(var i=0; i<contentColorSelector.length; i++){
jQuery(contentColorSelector[i]).css("color", "#"+contentColor[i].html());
}
/*End content Color*/

/*Button Color*/
var buttonColor = new Array();
jQuery(".buttonColor").each(function(){
buttonColor.push(jQuery(this));
});

var buttonColorSelector = new Array();
jQuery(".flp_button").each(function(){
buttonColorSelector.push(jQuery(this));
});

for(var i=0; i<buttonColorSelector.length; i++){
jQuery(buttonColorSelector[i]).css("color", "#"+buttonColor[i].html());
jQuery(buttonColorSelector[i]).css("border-color", "#"+buttonColor[i].html());
}
/*End of Button Color*/

/*Border Color*/
var borderColor = new Array();
jQuery('.borderColor').each(function(){
borderColor.push(jQuery(this));
});

var borderColorSelector = new Array();
jQuery(".flp_post").each(function(){
borderColorSelector.push(jQuery(this));
});

for(var i=0; i<borderColorSelector.length; i++){
jQuery(borderColorSelector[i]).css("border-color", "#"+borderColor[i].html());
}
/*End of Border Color*/
/*End of CSS changes and colors*/

/*Hidding the div with the color fields*/
jQuery(".flp_hidden_fields").hide();
/*End of the hidden fields*/

});


