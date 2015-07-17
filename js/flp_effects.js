$(document).ready(function(){

/*Add effects to the Image*/
var imgClass = $("#flp_img").attr("class");
switch(imgClass){
     case '0':
     $("#flp_img img").addClass("no-effect");
     break;

     case '1':
     $("#flp_img img").addClass("hvr-grow");
     break;

     case '2':
     $("#flp_img img").addClass("hvr-shrink");
     break;

     case '3':
     $("#flp_img img").addClass("hvr-pulse");
     break;

     case '4':
     $("#flp_img img").addClass("hvr-pulse-grow");
     break;

     case '5':
     $("#flp_img img").addClass("hvr-pulse-shrink");
     break;

     case '6':
     $("#flp_img img").addClass("hvr-push");
     break;

     case '7':
     $("#flp_img img").addClass("hvr-pop");
     break;

     case '8':
     $("#flp_img img").addClass("hvr-bounce-in");
     break;

     case '9':
     $("#flp_img img").addClass("hvr-bounce-out");
     break;

     case '10':
     $("#flp_img img").addClass("hvr-rotate");
     break;

     case '11':
     $("#flp_img img").addClass("hvr-grow-rotate");
     break;

     case '12':
     $("#flp_img img").addClass("hvr-float");
     break;

     case '13':
     $("#flp_img img").addClass("hvr-sink");
     break;

     case '14':
     $("#flp_img img").addClass("hvr-bob");
     break;

     case '15':
     $("#flp_img img").addClass("hvr-hang");
     break;

     case '16':
     $("#flp_img img").addClass("hvr-skew");
     break;

     case '17':
     $("#flp_img img").addClass("hvr-skew-forward");
     break;

     case '18':
     $("#flp_img img").addClass("hvr-skew-backward");
     break;

     case '19':
     $("#flp_img img").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     $("#flp_img img").addClass("hvr-wobble-vertical");
     break;

     case '21':
     $("#flp_img img").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     $("#flp_img img").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     $("#flp_img img").addClass("hvr-wobble-top");
     break;

     case '24':
     $("#flp_img img").addClass("hvr-wobble-bottom");
     break;

     case '25':
     $("#flp_img img").addClass("hvr-wobble-skew");
     break;

     case '26':
     $("#flp_img img").addClass("hvr-buzz");
     break;

     case '27':
     $("#flp_img img").addClass("hvr-buzz-out");
     break;

     case '28':
     $("#flp_img img").addClass("hvr-round-corners");
     break;

     default:
     }
/*End of Add effects to the Image*/

/*Title Animation */
var titleClass = $("#flp_title").attr("class");
switch(titleClass){
     case '0':
     $("#flp_title a").addClass("no-effect");
     break;

     case '1':
     $("#flp_title a").addClass("hvr-grow");
     break;

     case '2':
     $("#flp_title a").addClass("hvr-shrink");
     break;

     case '3':
     $("#flp_title a").addClass("hvr-pulse");
     break;

     case '4':
     $("#flp_title a").addClass("hvr-pulse-grow");
     break;

     case '5':
     $("#flp_title a").addClass("hvr-pulse-shrink");
     break;

     case '6':
     $("#flp_title a").addClass("hvr-push");
     break;

     case '7':
     $("#flp_title a").addClass("hvr-pop");
     break;

     case '8':
     $("#flp_title a").addClass("hvr-bounce-in");
     break;

     case '9':
     $("#flp_title a").addClass("hvr-bounce-out");
     break;

     case '10':
     $("#flp_title a").addClass("hvr-rotate");
     break;

     case '11':
     $("#flp_title a").addClass("hvr-grow-rotate");
     break;

     case '12':
     $("#flp_title a").addClass("hvr-float");
     break;

     case '13':
     $("#flp_title a").addClass("hvr-sink");
     break;

     case '14':
     $("#flp_title a").addClass("hvr-bob");
     break;

     case '15':
     $("#flp_title a").addClass("hvr-hang");
     break;

     case '16':
     $("#flp_title a").addClass("hvr-skew");
     break;

     case '17':
     $("#flp_title a").addClass("hvr-skew-forward");
     break;

     case '18':
     $("#flp_title a").addClass("hvr-skew-backward");
     break;

     case '19':
     $("#flp_title").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     $("#flp_title a").addClass("hvr-wobble-vertical");
     break;

     case '21':
     $("#flp_title a").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     $("#flp_title a").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     $("#flp_title a").addClass("hvr-wobble-top");
     break;

     case '24':
     $("#flp_title a").addClass("hvr-wobble-bottom");
     break;

     case '25':
     $("#flp_title a").addClass("hvr-wobble-skew");
     break;

     case '26':
     $("#flp_title a").addClass("hvr-buzz");
     break;

     case '27': 
     $("#flp_title a").addClass("hvr-buzz-out");
     break;

     case '28':
     $("#flp_title a").addClass("hvr-round-corners");
     break;

     default:
     }
/*End of title Animation*/

/*content Animation*/
var contentClass = $("#flp_content").attr("class");
switch(contentClass){
     case '0':
     $("#flp_content p").addClass("no-effect");
     break;

     case '1':
     $("#flp_content p").addClass("hvr-grow");
     break;

     case '2':
     $("#flp_content p").addClass("hvr-shrink");
     break;

     case '3':
     $("#flp_content p").addClass("hvr-pulse");
     break;

     case '4':
     $("#flp_content p").addClass("hvr-pulse-grow");
     break;

     case '5':
     $("#flp_content p").addClass("hvr-pulse-shrink");
     break;

     case '6':
     $("#flp_content p").addClass("hvr-push");
     break;

     case '7':
     $("#flp_content p").addClass("hvr-pop");
     break;

     case '8':
     $("#flp_content p").addClass("hvr-bounce-in");
     break;

     case '9':
     $("#flp_content p").addClass("hvr-bounce-out");
     break;

     case '10':
     $("#flp_content p").addClass("hvr-rotate");
     break;

     case '11':
     $("#flp_content p").addClass("hvr-grow-rotate");
     break;

     case '12':
     $("#flp_content p").addClass("hvr-float");
     break;

     case '13':
     $("#flp_content p").addClass("hvr-sink");
     break;

     case '14':
     $("#flp_content p").addClass("hvr-bob");
     break;

     case '15':
     $("#flp_content p").addClass("hvr-hang");
     break;

     case '16':
     $("#flp_content p").addClass("hvr-skew");
     break;

     case '17':
     $("#flp_content p").addClass("hvr-skew-forward");
     break;

     case '18':
     $("#flp_content p").addClass("hvr-skew-backward");
     break;

     case '19':
     $("#flp_content p").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     $("#flp_content p").addClass("hvr-wobble-vertical");
     break;

     case '21':
     $("#flp_content p").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     $("#flp_content p").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     $("#flp_content p").addClass("hvr-wobble-top");
     break;

     case '24':
     $("#flp_content p").addClass("hvr-wobble-bottom");
     break;

     case '25':
     $("#flp_content p").addClass("hvr-wobble-skew");
     break;

     case '26':
     $("#flp_content p").addClass("hvr-buzz");
     break;

     case '27': 
     $("#flp_content p").addClass("hvr-buzz-out");
     break;

     case '28':
     $("#flp_content p").addClass("hvr-round-corners");
     break;

     default:
     }

/*End Content Animation*/

/*Start Button Animation*/
var buttonClass = $("#flp_button_container").attr("class");
switch(buttonClass){
     case '0':
     $("#flp_button_container a").addClass("no-effect");
     break;

     case '1':
     $("#flp_button_container a").addClass("hvr-grow");
     break;

     case '2':
     $("#flp_button_container a").addClass("hvr-shrink");
     break;

     case '3':
     $("#flp_button_container a").addClass("hvr-pulse");
     break;

     case '4':
     $("#flp_button_container a").addClass("hvr-pulse-grow");
     break;

     case '5':
     $("#flp_button_container a").addClass("hvr-pulse-shrink");
     break;

     case '6':
     $("#flp_button_container a").addClass("hvr-push");
     break;

     case '7':
     $("#flp_button_container a").addClass("hvr-pop");
     break;

     case '8':
     $("#flp_button_container a").addClass("hvr-bounce-in");
     break;

     case '9':
     $("#flp_button_container a").addClass("hvr-bounce-out");
     break;

     case '10':
     $("#flp_button_container a").addClass("hvr-rotate");
     break;

     case '11':
     $("#flp_button_container a").addClass("hvr-grow-rotate");
     break;

     case '12':
     $("#flp_button_container a").addClass("hvr-float");
     break;

     case '13':
     $("#flp_button_container a").addClass("hvr-sink");
     break;

     case '14':
     $("#flp_button_container a").addClass("hvr-bob");
     break;

     case '15':
     $("#flp_button_container a").addClass("hvr-hang");
     break;

     case '16':
     $("#flp_button_container a").addClass("hvr-skew");
     break;

     case '17':
     $("#flp_button_container a").addClass("hvr-skew-forward");
     break;

     case '18':
     $("#flp_button_container a").addClass("hvr-skew-backward");
     break;

     case '19':
     $("#flp_button_container a").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     $("#flp_button_container a").addClass("hvr-wobble-vertical");
     break;

     case '21':
     $("#flp_button_container a").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     $("#flp_button_container a").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     $("#flp_button_container a").addClass("hvr-wobble-top");
     break;

     case '24':
     $("#flp_button_container a").addClass("hvr-wobble-bottom");
     break;

     case '25':
     $("#flp_button_container a").addClass("hvr-wobble-skew");
     break;

     case '26':
     $("#flp_button_container a").addClass("hvr-buzz");
     break;

     case '27': 
     $("#flp_button_container a").addClass("hvr-buzz-out");
     break;

     case '28':
     $("#flp_button_container a").addClass("hvr-round-corners");
     break;

     default:
     }

/*End Button Animation*/
/*Post Aligment*/
var postaling = $("#flp_post").attr("class");
    switch(postaling){
	case 'post 0':
	$(".post").addClass("vertical");
	break;

	case 'post 1':
	$(".post").addClass("horizontal");
 	break;
	
	default:
	
	}
/*End of Post Aligment*/

/*CSS changes and Colors*/
var titleColor = $('.titleColor').html();
$("#flp_title a").css("color", "#"+titleColor);

var contentColor = $('.contentColor').html();
$("#flp_content p").css("color", "#"+contentColor);

var buttonColor = $('.buttonColor').html();
$("#flp_button_container a").css("color", "#"+buttonColor);
$("#flp_button_container a").css("border-color", "#"+buttonColor);
$("#flp_button_container a").hover(function(){
	$("#flp_button_container a").css("color", "#"+buttonColor);
});

var borderColor = $('.borderColor').html();
$("#flp_post_container .post").css("border-color", "#"+borderColor);
});



