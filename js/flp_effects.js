$(document).ready(function(){

/*Add effects to the Image*/
var imgClass = new Array();
$(".flp_img").each(function(){
imgClass.push($(this));
});

for(var i=0; i<imgClass.length; i++){
switch(imgClass[i].attr("class")){
     case 'flp_img 0':
     $(imgClass[i]).addClass("no-effect");
     break;

     case 'flp_img 1':
     $(imgClass[i]).addClass("hvr-grow");
     break;

     case 'flp_img 2':
     $(imgClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_img 3':
     $(imgClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_img 4':
     $(imgClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_img 5':
     $(imgClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_img 6':
     $(imgClass[i]).addClass("hvr-push");
     break;

     case 'flp_img 7':
     $(imgClass[i]).addClass("hvr-pop");
     break;

     case 'flp_img 8':
     $(imgClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_img 9':
     $(imgClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_img 10':
     $(imgClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_img 11':
     $(imgClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_img 12':
     $(imgClass[i]).addClass("hvr-float");
     break;

     case 'flp_img 13':
     $(imgClass[i]).addClass("hvr-sink");
     break;

     case 'flp_img 14':
     $(imgClass[i]).addClass("hvr-bob");
     break;

     case 'flp_img 15':
     $(imgClass[i]).addClass("hvr-hang");
     break;

     case 'flp_img 16':
     $(imgClass[i]).addClass("hvr-skew");
     break;

     case 'flp_img 17':
     $(imgClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_img 18':
     $(imgClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_img 19':
     $(imgClass[i]).addClass("hvr-wobble-horizontal");
     break;

     case 'flp_img 20':
     $(imgClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_img 21':
     $(imgClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_img 22':
     $(imgClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_img 23':
     $(imgClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_img 24':
     $(imgClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_img 25':
     $(imgClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_img 26':
     $(imgClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_img 27':
     $(imgClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_img 28':
     $(imgClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End of Add effects to the Image*/
var titleClass = new Array();
$(".flp_title").each(function(){
titleClass.push($(this));
});

for(var i=0; i<titleClass.length; i++){
switch(titleClass[i].attr("class")){
     case 'flp_title 0':
     $(titleClass[i]).addClass("no-effect");
     break;

     case 'flp_title 1':
     $(titleClass[i]).addClass("hvr-grow");
     break;

     case 'flp_title 2':
     $(titleClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_title 3':
     $(titleClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_title 4':
     $(titleClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_title 5':
     $(titleClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_title 6':
     $(titleClass[i]).addClass("hvr-push");
     break;

     case 'flp_title 7':
     $(titleClass[i]).addClass("hvr-pop");
     break;

     case 'flp_title 8':
     $(titleClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_title 9':
     $(titleClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_title 10':
     $(titleClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_title 11':
     $(titleClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_title 12':
     $(titleClass[i]).addClass("hvr-float");
     break;

     case 'flp_title 13':
     $(titleClass[i]).addClass("hvr-sink");
     break;

     case 'flp_title 14':
     $(titleClass[i]).addClass("hvr-bob");
     break;

     case 'flp_title 15':
     $(titleClass[i]).addClass("hvr-hang");
     break;

     case 'flp_title 16':
     $(titleClass[i]).addClass("hvr-skew");
     break;

     case 'flp_title 17':
     $(titleClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_title 18':
     $(titleClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_title 19':
     $("#flp_title").addClass("hvr-wobble-horizontal");
     break;

     case 'flp_title 20':
     $(titleClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_title 21':
     $(titleClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_title 22':
     $(titleClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_title 23':
     $(titleClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_title 24':
     $(titleClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_title 25':
     $(titleClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_title 26':
     $(titleClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_title 27': 
     $(titleClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_title 28':
     $(titleClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End of title Animation*/

/*content Animation*/
var contentClass = new Array();
$(".flp_content").each(function(){
contentClass.push($(this));
});

for(var i=0; i<contentClass.length; i++){
switch(contentClass[i].attr("class")){
     case 'flp_content 0':
     $(contentClass[i]).addClass("no-effect");
     break;

     case 'flp_content 1':
     $(contentClass[i]).addClass("hvr-grow");
     break;

     case 'flp_content 2':
     $(contentClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_content 3':
     $(contentClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_content 4':
     $(contentClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_content 5':
     $(contentClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_content 6':
     $(contentClass[i]).addClass("hvr-push");
     break;

     case 'flp_content 7':
     $(contentClass[i]).addClass("hvr-pop");
     break;

     case 'flp_content 8':
     $(contentClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_content 9':
     $(contentClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_content 10':
     $(contentClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_content 11':
     $(contentClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_content 12':
     $(contentClass[i]).addClass("hvr-float");
     break;

     case 'flp_content 13':
     $(contentClass[i]).addClass("hvr-sink");
     break;

     case 'flp_content 14':
     $(contentClass[i]).addClass("hvr-bob");
     break;

     case 'flp_content 15':
     $(contentClass[i]).addClass("hvr-hang");
     break;

     case 'flp_content 16':
     $(contentClass[i]).addClass("hvr-skew");
     break;

     case 'flp_content 17':
     $(contentClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_content 18':
     $(contentClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_content 19':
     $(contentClass[i]).addClass("hvr-wobble-horizontal");
     break;

     case 'flp_content 20':
     $(contentClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_content 21':
     $(contentClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_content 22':
     $(contentClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_content 23':
     $(contentClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_content 24':
     $(contentClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_content 25':
     $(contentClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_content 26':
     $(contentClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_content 27': 
     $(contentClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_content 28':
     $(contentClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End Content Animation*/

/*Start Button Animation*/
var buttonClass = new Array();
$(".flp_button").each(function(){
buttonClass.push($(this));
});

for(var i=0; i<buttonClass.length; i++){
switch(buttonClass[i].attr("class")){
     case 'flp_button 0':
     $(buttonClass[i]).addClass("no-effect");
     break;

     case 'flp_button 1':
     $(buttonClass[i]).addClass("hvr-grow");
     break;
 
     case 'flp_button 2':
     $(buttonClass[i]).addClass("hvr-shrink");
     break;

     case 'flp_button 3':
     $(buttonClass[i]).addClass("hvr-pulse");
     break;

     case 'flp_button 4':
     $(buttonClass[i]).addClass("hvr-pulse-grow");
     break;

     case 'flp_button 5':
     $(buttonClass[i]).addClass("hvr-pulse-shrink");
     break;

     case 'flp_button 6':
     $(buttonClass[i]).addClass("hvr-push");
     break;

     case 'flp_button 7':
     $(buttonClass[i]).addClass("hvr-pop");
     break;

     case 'flp_button 8':
     $(buttonClass[i]).addClass("hvr-bounce-in");
     break;

     case 'flp_button 9':
     $(buttonClass[i]).addClass("hvr-bounce-out");
     break;

     case 'flp_button 10':
     $(buttonClass[i]).addClass("hvr-rotate");
     break;

     case 'flp_button 11':
     $(buttonClass[i]).addClass("hvr-grow-rotate");
     break;

     case 'flp_button 12':
     $(buttonClass[i]).addClass("hvr-float");
     break;

     case 'flp_button 13':
     $(buttonClass[i]).addClass("hvr-sink");
     break;

     case 'flp_button 14':
     $(buttonClass[i]).addClass("hvr-bob");
     break;

     case 'flp_button 15':
     $(buttonClass[i]).addClass("hvr-hang");
     break;

     case 'flp_button 16':
     $(buttonClass[i]).addClass("hvr-skew");
     break;

     case 'flp_button 17':
     $(buttonClass[i]).addClass("hvr-skew-forward");
     break;

     case 'flp_button 18':
     $(buttonClass[i]).addClass("hvr-skew-backward");
     break;

     case 'flp_button 19':
     $(buttonClass[i]).addClass("hvr-wobble-horizontal");
     break;

     case 'flp_button 20':
     $(buttonClass[i]).addClass("hvr-wobble-vertical");
     break;

     case 'flp_button 21':
     $(buttonClass[i]).addClass("hvr-wobble-to-bottom-right");
     break;

     case 'flp_button 22':
     $(buttonClass[i]).addClass("hvr-wobble-to-top-right");
     break;

     case 'flp_button 23':
     $(buttonClass[i]).addClass("hvr-wobble-top");
     break;

     case 'flp_button 24':
     $(buttonClass[i]).addClass("hvr-wobble-bottom");
     break;

     case 'flp_button 25':
     $(buttonClass[i]).addClass("hvr-wobble-skew");
     break;

     case 'flp_button 26':
     $(buttonClass[i]).addClass("hvr-buzz");
     break;

     case 'flp_button 27': 
     $(buttonClass[i]).addClass("hvr-buzz-out");
     break;

     case 'flp_button 28':
     $(buttonClass[i]).addClass("hvr-round-corners");
     break;

     default:
     }
}
/*End Button Animation*/
/*Post Aligment*/
var containerWidth = new Array();
$(".flp_latest_post").each(function(){
containerWidth.push($(this));
});

for(var i=0; i<containerWidth.length; i++){

if(containerWidth[i].width() >= 800){
$(containerWidth[i]).addClass("horizontal");
}
}

/*End of Post Aligment*/

/*CSS changes and Colors*/
/*title Color*/
var titleColor = new Array();
$('.titleColor').each(function(){
titleColor.push($(this));
});

var titleColorSelector = new Array();
$('.flp_title a').each(function(){
titleColorSelector.push($(this));
});

for(var i = 0; i<titleColorSelector.length; i++){
$(titleColorSelector[i]).css("color", "#"+titleColor[i].html());
}
/*End Title Color*/

/*Content Color*/
var contentColor = new Array();
$('.contentColor').each(function(){
contentColor.push($(this));
});

var contentColorSelector = new Array();
$(".flp_content p").each(function(){
contentColorSelector.push($(this));
});

for(var i=0; i<contentColorSelector.length; i++){
$(contentColorSelector[i]).css("color", "#"+contentColor[i].html());
}
/*End content Color*/

/*Button Color*/
var buttonColor = new Array();
$(".buttonColor").each(function(){
buttonColor.push($(this));
});

var buttonColorSelector = new Array();
$(".flp_button").each(function(){
buttonColorSelector.push($(this));
});

for(var i=0; i<buttonColorSelector.length; i++){
$(buttonColorSelector[i]).css("color", "#"+buttonColor[i].html());
$(buttonColorSelector[i]).css("border-color", "#"+buttonColor[i].html());
}
/*End of Button Color*/

/*Border Color*/
var borderColor = new Array();
$('.borderColor').each(function(){
borderColor.push($(this));
});

var borderColorSelector = new Array();
$(".flp_post").each(function(){
borderColorSelector.push($(this));
});

for(var i=0; i<borderColorSelector.length; i++){
$(borderColorSelector[i]).css("border-color", "#"+borderColor[i].html());
}
/*End of Border Color*/
/*End of CSS changes and colors*/

/*Hidding the div with the color fields*/
$(".flp_hidden_fields").hide();
/*End of the hidden fields*/

});


