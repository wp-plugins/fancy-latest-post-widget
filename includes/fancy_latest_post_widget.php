<?php 
class Fancy_Lates_Post_Widget extends WP_Widget 
{


	function __construct() {
	parent::__construct(
		'Fancy_Lates_Post_Widget', // Base ID
		'Fancy Latest Post Widget', // Name
		array('description' => __( 'Display the latest post of your website with a modern layout'))
	   );
}


	function update($new_instance, $old_instance) {      
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		$instance['numberOfPost'] = strip_tags($new_instance['numberOfPost']);
		$instance['readMoreText'] = strip_tags($new_instance['readMoreText']);
		$instance['excerptLength'] = strip_tags($new_instance['excerptLength']);
		$instance['showExcerpt'] = $new_instance['showExcerpt'];
		$instance['aligment'] = esc_sql($new_instance['aligment']);
		$instance['showImageAnim'] = esc_sql($new_instance['showImageAnim']);
		$instance['showTitleAnim'] = esc_sql($new_instance['showTitleAnim']);
		$instance['showContentAnim'] = esc_sql($new_instance['showContentAnim']);
		$instance['showButtonAnim'] = esc_sql($new_instance['showButtonAnim']);
		
		return $instance;
}
 
	function form($instance) {
	if( $instance) {
		$title = esc_attr($instance['title']);
		$numberOfPost = esc_attr($instance['numberOfPost']);
		$readMoreText = esc_attr($instance['readMoreText']);
		$excerptLength = esc_attr($instance['excerptLength']);
		$showExcerpt = esc_attr($instance['showExcerpt']);
		$aligment = esc_attr($instance['aligment']);
		$showImageAnim = esc_attr($instance['showImageAnim']);
                $showTitleAnim = esc_attr($instance['showTitleAnim']);
		$showContentAnim = esc_attr($instance['showContentAnim']);
		$showButtonAnim = esc_attr($instance['showButtonAnim']);
	} else {
		$title = '';
		$numberOfPost = '';
                $excerpt_Limit = '';
		$readMoreText = '';
		$excerptLength = '';
		$showExcerpt = '';
		$aligment = '';
		$showImageAnim = '';
		$showTitleAnim = '';
		$showContentAnim = '';
		$showButtonAnim = '';
	}

  

	?>
      
	<?php 
	$animArr = array("None","Grow", "Shrink","Pulse", "Pulse Grow", "Pulse Shrink", "Push", "Pop", "Bounce in", "Bounce out", "Rotate", "Grow Rotate", "Float", "Sink", "Bob", "Hang", "Skew", "Skew Forward", "Skew Backward", "Wobble Horizontal", "Wobble 		Vertical", "Wobble To Bottom Right", "Wobble to Top Right", "Wobble Top", "Wooble Bottom", "Wobble Skew", "Buzz",  "Buzz Out", "Round Corners");
        
	$align = array("Vertical(Sidebar)", "Horizontal(content)");

	?>      <div class="settings_section">
		<center><h3>DISPLAY SETTINGS</h3></center>
		<p class="flp_title">
		<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title', 'Fancy_Lates_Post_Widget'); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
		</p>
		<p class="flp_num-post">
		<label for="<?php echo $this->get_field_id('numberOfPost'); ?>"><?php _e('Number of Post: ', 'Fancy_Lates_Post_Widget'); ?></label>		
		<select id="<?php echo $this->get_field_id('numberOfPost'); ?>"  name="<?php echo $this->get_field_name('numberOfPost'); ?>">
			<?php for($x=1;$x<=12;$x++): ?>
			<option <?php echo $x == $numberOfPost ? 'selected="selected"' : '';?> value="<?php echo $x;?>"><?php echo $x; ?></option>
			<?php endfor;?>
		</select>
                </p>
		<p class="flp_show-excerpt">
		<label for="<?php echo $this->get_field_id('showExcerpt'); ?>"><?php _e('Show Excerpt: ', 'Fancy_Lates_Post_Widget'); ?></label>
		<input class="show" id="<?php echo $this->get_field_id('showExcerpt'); ?>" name="<?php echo $this->get_field_name('showExcerpt'); ?>" type="checkbox" <?php checked($instance['showExcerpt'], 'on'); ?>/>
		</p>	
		<p class='flp_excerpt-length'>
		<label for="<?php echo $this->get_field_id('excerptLength'); ?>"><?php _e('Excerpt Length: ', 'Fancy_Lates_Post_Widget'); ?></label>		
		<select id="<?php echo $this->get_field_id('excerptLength'); ?>"  name="<?php echo $this->get_field_name('excerptLength'); ?>">
			<?php for($x=100;$x<=300;$x = $x + 100): ?>
			<option <?php echo $x == $excerptLength ? 'selected="selected"' : '';?> value="<?php echo $x;?>"><?php echo $x; ?></option>
			<?php endfor;?>
		</select>
                </p>
		<p class='flp_read-more-text'>
		<label for="<?php echo $this->get_field_id('readMoreText'); ?>"><?php _e('Read More Button Value: ', 'Fancy_Lates_Post_Widget'); ?></label>
		<input class="" id="<?php echo $this->get_field_id('readMoreText'); ?>" name="<?php echo $this->get_field_name('readMoreText'); ?>" type="text" value="<?php echo $readMoreText; ?>" />
		</p>
		<p class='flp_aligment'>
		<label for="<?php echo $this->get_field_id('aligment'); ?>"><?php _e('Aligment: ', 'Fancy_Lates_Post_Widget'); ?></label>		
		<select id="<?php echo $this->get_field_id('aligment'); ?>"  name="<?php echo $this->get_field_name('aligment'); ?>">
			<?php for($x=0;$x<2;$x++): ?>
			<option <?php echo $x == $aligment ? 'selected="selected"' : '';?> value="<?php echo $x;?>"><?php echo $align[$x]; ?></option>
			<?php endfor;?>
		</select>
                </p>
		</div>
		
		<div class="anim_section">
                <center><h3>ANIMATIONS</h3></center>
		<p  class="flp_img_anim">
		<label for="<?php echo $this->get_field_id('showImageAnim'); ?>"><?php _e('Thumbnail Effect : ', 'Fancy_Lates_Post_Widget'); ?></label><br>		
		<select id="<?php echo $this->get_field_id('showImageAnim'); ?>"  name="<?php echo $this->get_field_name('showImageAnim'); ?>">
		        <?php $lenght = count($animArr); ?>
			<?php for($x=0;$x<$lenght ;$x++): ?>
			<option <?php echo  $x == $showImageAnim ? 'selected="selected"' : '';?> value="<?php echo $x ;?>"><?php echo $animArr[$x]; ?></option>
			<?php endfor;?>
		</select>
                </p>
		<p class='flp_title_anim'>
		<label for="<?php echo $this->get_field_id('showTitleAnim'); ?>"><?php _e('Tittle Effect : ', 'Fancy_Lates_Post_Widget'); ?></label><br>		
		<select id="<?php echo $this->get_field_id('showTitleAnim'); ?>"  name="<?php echo $this->get_field_name('showTitleAnim'); ?>">
		        <?php $lenght = count($animArr); ?>
			<?php for($x=0;$x<$lenght ;$x++): ?>
			<option <?php echo  $x == $showTitleAnim ? 'selected="selected"' : '';?> value="<?php echo $x ;?>"><?php echo $animArr[$x]; ?></option>
			<?php endfor;?>
		</select>
                </p>
		<p class='flp_content_anim'>
		<label for="<?php echo $this->get_field_id('showContentAnim'); ?>"><?php _e('Excerpt Effect : ', 'Fancy_Lates_Post_Widget'); ?></label><br>		
		<select id="<?php echo $this->get_field_id('showContentAnim'); ?>"  name="<?php echo $this->get_field_name('showContentAnim'); ?>">
		        <?php $lenght = count($animArr); ?>
			<?php for($x=0;$x<$lenght ;$x++): ?>
			<option <?php echo  $x == $showContentAnim ? 'selected="selected"' : '';?> value="<?php echo $x ;?>"><?php echo $animArr[$x]; ?></option>
			<?php endfor;?>
		</select>
                </p>
		<p class='flp_button_anim'>
		<label for="<?php echo $this->get_field_id('showButtonAnim'); ?>"><?php _e('Button Effect : ', 'Fancy_Lates_Post_Widget'); ?></label><br>		
		<select id="<?php echo $this->get_field_id('showButtonAnim'); ?>"  name="<?php echo $this->get_field_name('showButtonAnim'); ?>">
		        <?php $lenght = count($animArr); ?>
			<?php for($x=0;$x<$lenght ;$x++): ?>
			<option <?php echo  $x == $showButtonAnim ? 'selected="selected"' : '';?> value="<?php echo $x ;?>"><?php echo $animArr[$x]; ?></option>
			<?php endfor;?>
		</select>
                </p>
		</div>			 
	<?php
	} 

	function widget($args, $instance) { 
		extract( $args );
		$title = apply_filters('widget_title', $instance['title']);
		$numberOfPost = $instance['numberOfPost'];
                $readMoreText = $instance['readMoreText'];
		$excerptLength = $instance['excerptLength'];
		$showExcerpt = $instance['showExcerpt']? 'true' : 'false';
		$aligment = $instance['aligment'];
		$showImageAnim = $instance['showImageAnim'];
		$showTitleAnim = $instance['showTitleAnim'];
		$showContentAnim = $instance['showContentAnim'];
		$showButtonAnim = $instance['showButtonAnim'];
		echo $before_widget;
		if ( $title ) {
			echo $before_title . $title . $after_title;
		}
		$this->getFancyLatestPost($numberOfPost, $readMoreText, $excerptLength, $showExcerpt, $aligment, $showImageAnim, $showTitleAnim, $showContentAnim, $showButtonAnim);
                echo $after_widget;
	}



	function getFancyLatestPost($numberOfPost, $readMoreText, $excerptLength, $showExcerpt, $aligment , $showImageAnim, $showTitleAnim, $showContentAnim, $showButtonAnim) { //html
		global $post;
		$flp_post = new WP_Query();
		$flp_post->query('post_type=post&posts_per_page=' . $numberOfPost );	
		if($flp_post->found_posts > 0) { ?>
			<div class="latest_post featured-content" id="flp_post_container">
				<?php while ($flp_post->have_posts()) { $flp_post->the_post(); ?>
					<div class="post <?php echo $aligment ?>" id="flp_post">
					<div class="<?php echo $showImageAnim ?>" id="flp_img"><a href="<?php echo get_permalink(); ?>">
					<?php $image = (has_post_thumbnail($post->ID)) ? get_the_post_thumbnail($post->ID) : '<div class="flp_no_img" id="flp_no_img"><img clas="" src='.plugins_url("/img/no_img.png", __FILE__).'><img></div>';
					echo $image; ?>
					</div></a>
					<h2 class="<?php echo $showTitleAnim ?>" id="flp_title"><a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a></h2>
					<?php if($showExcerpt == 'true'){ ?>
 					<div id="flp_content" class="<?php echo $showContentAnim ?>"><p><?php $this->the_excerpt_max_charlength($excerptLength); ?></p></div>
					<div id="flp_button_container" class="<?php echo $showButtonAnim ?>"><a class="button" id="flp_button" href="<?php echo get_permalink(); ?>"> <?php $this->returnReadMore($readMoreText); ?></a></div>
					<?php } ?>
					</div>
			<?php	} ?>
			</div>

			<?php wp_reset_postdata(); 
		}else{
			echo '<p style="padding:25px;">No listing found</p>';
		} 

	}
			
//Limit the excerpt
	function the_excerpt_max_charlength($charlength) {
	$excerpt = get_the_excerpt();
	$charlength++;

	if ( mb_strlen( $excerpt ) > $charlength ) {
		$subex = mb_substr( $excerpt, 0, $charlength - 5 );
		$exwords = explode( ' ', $subex );
		$excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
		if ( $excut < 0 ) {
			echo mb_substr( $subex, 0, $excut );
		} else {
			echo $subex;
		}
		echo '';
	} else {
		echo $excerpt;
	}
}

	function returnReadMore($readMoreText){
  	if($readMoreText){
  	echo $readMoreText;
  	}else{
   	 echo 'Read More';
  	}
	}	
 
} 


add_action('widgets_init', create_function('', 'return register_widget("Fancy_Lates_Post_Widget");'));