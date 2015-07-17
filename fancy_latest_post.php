<?php
/* Plugin Name: Fancy Latest Post Widget
Plugin URI: 
Description: Display the latest post with Animated effects in your sidebar or content, select an animation effect for the Post Thumbnail, Title, Content and Read More Button, This widget is higly customizable.
Version: 1.2.5
Author: Juan Mojica
Author URI: 
License: GPLv2
*/
/*  Copyright 2015 Juan Mojica

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

define( 'CD_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

require_once( CD_PLUGIN_PATH . 'includes/fancy_latest_post_widget.php' );

/*StyleSheet*/
add_action( 'wp_enqueue_scripts', 'flp_stylesheet');
function flp_stylesheet() {
    	wp_enqueue_style( 'flp_css_stylesheet', plugins_url('/css/fancy-latest-post-stylesheet.css', __FILE__) );
    	wp_enqueue_style( 'hover_effects', plugins_url('/css/hover.css', __FILE__) );
    	wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');
}

/*JS/Jquery*/
add_action( 'wp_enqueue_scripts', 'flp_js', 20);
function flp_js(){
       wp_enqueue_script( 'jquery-min', plugins_url('/js/jquery-2.1.4.min.js', __FILE__), null, null, false); 
       wp_enqueue_script( 'flp_effects', plugins_url('/js/flp_effects.js', __FILE__), null, null, true);
	
}

/*Admin Script and Style*/
add_action ( 'admin_enqueue_scripts', 'admin_scripts', 20);
function admin_scripts(){
	wp_enqueue_style( 'flp_css_admin', plugins_url('/css/flp_admin_style.css', __FILE__) );
	wp_enqueue_script( 'jquery-min', plugins_url('/js/jquery-2.1.4.min.js', __FILE__), null, null, false);
	wp_enqueue_script( 'js-color', plugins_url('/jscolor/jscolor.js', __FILE__), null, null, false);
      	wp_enqueue_script( 'flp_admin', plugins_url('/js/flp_admin.js', __FILE__), null, null, true);
}
?>
