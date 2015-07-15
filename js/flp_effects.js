jQuery(document).ready(function(){

/*Add effects to the Image*/
var imgClass = jQuery("#flp_img").attr("class");
switch(imgClass){
     case '0':
     jQuery("#flp_img img").addClass("no-effect");
     break;

     case '1':
     jQuery("#flp_img img").addClass("hvr-grow");
     break;

     case '2':
     jQuery("#flp_img img").addClass("hvr-shrink");
     break;

     case '3':
     jQuery("#flp_img img").addClass("hvr-pulse");
     break;

     case '4':
     jQuery("#flp_img img").addClass("hvr-pulse-grow");
     break;

     case '5':
     jQuery("#flp_img img").addClass("hvr-pulse-shrink");
     break;

     case '6':
     jQuery("#flp_img img").addClass("hvr-push");
     break;

     case '7':
     jQuery("#flp_img img").addClass("hvr-pop");
     break;

     case '8':
     jQuery("#flp_img img").addClass("hvr-bounce-in");
     break;

     case '9':
     jQuery("#flp_img img").addClass("hvr-bounce-out");
     break;

     case '10':
     jQuery("#flp_img img").addClass("hvr-rotate");
     break;

     case '11':
     jQuery("#flp_img img").addClass("hvr-grow-rotate");
     break;

     case '12':
     jQuery("#flp_img img").addClass("hvr-float");
     break;

     case '13':
     jQuery("#flp_img img").addClass("hvr-sink");
     break;

     case '14':
     jQuery("#flp_img img").addClass("hvr-bob");
     break;

     case '15':
     jQuery("#flp_img img").addClass("hvr-hang");
     break;

     case '16':
     jQuery("#flp_img img").addClass("hvr-skew");
     break;

     case '17':
     jQuery("#flp_img img").addClass("hvr-skew-forward");
     break;

     case '18':
     jQuery("#flp_img img").addClass("hvr-skew-backward");
     break;

     case '19':
     jQuery("#flp_img img").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     jQuery("#flp_img img").addClass("hvr-wobble-vertical");
     break;

     case '21':
     jQuery("#flp_img img").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     jQuery("#flp_img img").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     jQuery("#flp_img img").addClass("hvr-wobble-top");
     break;

     case '24':
     jQuery("#flp_img img").addClass("hvr-wobble-bottom");
     break;

     case '25':
     jQuery("#flp_img img").addClass("hvr-wobble-skew");
     break;

     case '26':
     jQuery("#flp_img img").addClass("hvr-buzz");
     break;

     case '27':
     jQuery("#flp_img img").addClass("hvr-buzz-out");
     break;

     case '28':
     jQuery("#flp_img img").addClass("hvr-round-corners");
     break;

     default:
     }
/*End of Add effects to the Image*/

/*Title Animation */
var titleClass = jQuery("#flp_title").attr("class");
switch(titleClass){
     case '0':
     jQuery("#flp_title a").addClass("no-effect");
     break;

     case '1':
     jQuery("#flp_title a").addClass("hvr-grow");
     break;

     case '2':
     jQuery("#flp_title a").addClass("hvr-shrink");
     break;

     case '3':
     jQuery("#flp_title a").addClass("hvr-pulse");
     break;

     case '4':
     jQuery("#flp_title a").addClass("hvr-pulse-grow");
     break;

     case '5':
     jQuery("#flp_title a").addClass("hvr-pulse-shrink");
     break;

     case '6':
     jQuery("#flp_title a").addClass("hvr-push");
     break;

     case '7':
     jQuery("#flp_title a").addClass("hvr-pop");
     break;

     case '8':
     jQuery("#flp_title a").addClass("hvr-bounce-in");
     break;

     case '9':
     jQuery("#flp_title a").addClass("hvr-bounce-out");
     break;

     case '10':
     jQuery("#flp_title a").addClass("hvr-rotate");
     break;

     case '11':
     jQuery("#flp_title a").addClass("hvr-grow-rotate");
     break;

     case '12':
     jQuery("#flp_title a").addClass("hvr-float");
     break;

     case '13':
     jQuery("#flp_title a").addClass("hvr-sink");
     break;

     case '14':
     jQuery("#flp_title a").addClass("hvr-bob");
     break;

     case '15':
     jQuery("#flp_title a").addClass("hvr-hang");
     break;

     case '16':
     jQuery("#flp_title a").addClass("hvr-skew");
     break;

     case '17':
     jQuery("#flp_title a").addClass("hvr-skew-forward");
     break;

     case '18':
     jQuery("#flp_title a").addClass("hvr-skew-backward");
     break;

     case '19':
     jQuery("#flp_title").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     jQuery("#flp_title a").addClass("hvr-wobble-vertical");
     break;

     case '21':
     jQuery("#flp_title a").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     jQuery("#flp_title a").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     jQuery("#flp_title a").addClass("hvr-wobble-top");
     break;

     case '24':
     jQuery("#flp_title a").addClass("hvr-wobble-bottom");
     break;

     case '25':
     jQuery("#flp_title a").addClass("hvr-wobble-skew");
     break;

     case '26':
     jQuery("#flp_title a").addClass("hvr-buzz");
     break;

     case '27': 
     jQuery("#flp_title a").addClass("hvr-buzz-out");
     break;

     case '28':
     jQuery("#flp_title a").addClass("hvr-round-corners");
     break;

     default:
     }
/*End of title Animation*/

/*content Animation*/
var contentClass = jQuery("#flp_content").attr("class");
switch(contentClass){
     case '0':
     jQuery("#flp_content p").addClass("no-effect");
     break;

     case '1':
     jQuery("#flp_content p").addClass("hvr-grow");
     break;

     case '2':
     jQuery("#flp_content p").addClass("hvr-shrink");
     break;

     case '3':
     jQuery("#flp_content p").addClass("hvr-pulse");
     break;

     case '4':
     jQuery("#flp_content p").addClass("hvr-pulse-grow");
     break;

     case '5':
     jQuery("#flp_content p").addClass("hvr-pulse-shrink");
     break;

     case '6':
     jQuery("#flp_content p").addClass("hvr-push");
     break;

     case '7':
     jQuery("#flp_content p").addClass("hvr-pop");
     break;

     case '8':
     jQuery("#flp_content p").addClass("hvr-bounce-in");
     break;

     case '9':
     jQuery("#flp_content p").addClass("hvr-bounce-out");
     break;

     case '10':
     jQuery("#flp_content p").addClass("hvr-rotate");
     break;

     case '11':
     jQuery("#flp_content p").addClass("hvr-grow-rotate");
     break;

     case '12':
     jQuery("#flp_content p").addClass("hvr-float");
     break;

     case '13':
     jQuery("#flp_content p").addClass("hvr-sink");
     break;

     case '14':
     jQuery("#flp_content p").addClass("hvr-bob");
     break;

     case '15':
     jQuery("#flp_content p").addClass("hvr-hang");
     break;

     case '16':
     jQuery("#flp_content p").addClass("hvr-skew");
     break;

     case '17':
     jQuery("#flp_content p").addClass("hvr-skew-forward");
     break;

     case '18':
     jQuery("#flp_content p").addClass("hvr-skew-backward");
     break;

     case '19':
     jQuery("#flp_content p").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     jQuery("#flp_content p").addClass("hvr-wobble-vertical");
     break;

     case '21':
     jQuery("#flp_content p").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     jQuery("#flp_content p").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     jQuery("#flp_content p").addClass("hvr-wobble-top");
     break;

     case '24':
     jQuery("#flp_content p").addClass("hvr-wobble-bottom");
     break;

     case '25':
     jQuery("#flp_content p").addClass("hvr-wobble-skew");
     break;

     case '26':
     jQuery("#flp_content p").addClass("hvr-buzz");
     break;

     case '27': 
     jQuery("#flp_content p").addClass("hvr-buzz-out");
     break;

     case '28':
     jQuery("#flp_content p").addClass("hvr-round-corners");
     break;

     default:
     }

/*End Content Animation*/

/*Start Button Animation*/
var buttonClass = jQuery("#flp_button_container").attr("class");
switch(buttonClass){
     case '0':
     jQuery("#flp_button_container a").addClass("no-effect");
     break;

     case '1':
     jQuery("#flp_button_container a").addClass("hvr-grow");
     break;

     case '2':
     jQuery("#flp_button_container a").addClass("hvr-shrink");
     break;

     case '3':
     jQuery("#flp_button_container a").addClass("hvr-pulse");
     break;

     case '4':
     jQuery("#flp_button_container a").addClass("hvr-pulse-grow");
     break;

     case '5':
     jQuery("#flp_button_container a").addClass("hvr-pulse-shrink");
     break;

     case '6':
     jQuery("#flp_button_container a").addClass("hvr-push");
     break;

     case '7':
     jQuery("#flp_button_container a").addClass("hvr-pop");
     break;

     case '8':
     jQuery("#flp_button_container a").addClass("hvr-bounce-in");
     break;

     case '9':
     jQuery("#flp_button_container a").addClass("hvr-bounce-out");
     break;

     case '10':
     jQuery("#flp_button_container a").addClass("hvr-rotate");
     break;

     case '11':
     jQuery("#flp_button_container a").addClass("hvr-grow-rotate");
     break;

     case '12':
     jQuery("#flp_button_container a").addClass("hvr-float");
     break;

     case '13':
     jQuery("#flp_button_container a").addClass("hvr-sink");
     break;

     case '14':
     jQuery("#flp_button_container a").addClass("hvr-bob");
     break;

     case '15':
     jQuery("#flp_button_container a").addClass("hvr-hang");
     break;

     case '16':
     jQuery("#flp_button_container a").addClass("hvr-skew");
     break;

     case '17':
     jQuery("#flp_button_container a").addClass("hvr-skew-forward");
     break;

     case '18':
     jQuery("#flp_button_container a").addClass("hvr-skew-backward");
     break;

     case '19':
     jQuery("#flp_button_container a").addClass("hvr-wobble-horizontal");
     break;

     case '20':
     jQuery("#flp_button_container a").addClass("hvr-wobble-vertical");
     break;

     case '21':
     jQuery("#flp_button_container a").addClass("hvr-wobble-to-bottom-right");
     break;

     case '22':
     jQuery("#flp_button_container a").addClass("hvr-wobble-to-top-right");
     break;

     case '23':
     jQuery("#flp_button_container a").addClass("hvr-wobble-top");
     break;

     case '24':
     jQuery("#flp_button_container a").addClass("hvr-wobble-bottom");
     break;

     case '25':
     jQuery("#flp_button_container a").addClass("hvr-wobble-skew");
     break;

     case '26':
     jQuery("#flp_button_container a").addClass("hvr-buzz");
     break;

     case '27': 
     jQuery("#flp_button_container a").addClass("hvr-buzz-out");
     break;

     case '28':
     jQuery("#flp_button_container a").addClass("hvr-round-corners");
     break;

     default:
     }

/*End Button Animation*/
/*Post Aligment*/
var postaling = jQuery("#flp_post").attr("class");
    switch(postaling){
	case 'post 0':
	jQuery(".post").addClass("vertical");
	break;

	case 'post 1':
	jQuery(".post").addClass("horizontal");
 	break;
	
	default:
	
	}
/*End of Post Aligment*/

});



