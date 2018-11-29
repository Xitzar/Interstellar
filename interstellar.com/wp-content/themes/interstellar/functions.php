<?php

ini_set("display_errors", "On");
error_reporting(E_ALL);

//require get_template_directory() . '/inc/template-functions.php';

// Enqueue scripts and styles.
function bouletap_scripts() {

	$path = get_stylesheet_uri() . "/../medias/css/";
	wp_enqueue_style('fonts.googleapis', "https://fonts.googleapis.com/css?family=Lato:400,700italic,700,400italic,300italic,300,100italic,100");
	wp_enqueue_style('animate', "{$path}animate.css");
	wp_enqueue_style('font-awesome', "{$path}font-awesome.min.css");
	
	wp_enqueue_script('jquery', "{$path}jquery.min.js");

	//wp_enqueue_style( 'bouletap-style', get_stylesheet_uri() );
	wp_enqueue_style( 'bouletap-style', get_stylesheet_uri() . "/../../twentyfifteen/style.css" );
	

}
add_action( 'wp_enqueue_scripts', 'bouletap_scripts' );


function bouletap_footerscripts() {
	$path = get_stylesheet_uri() . "/../medias/js/";
	wp_enqueue_script('bootstrap', "{$path}bootstrap.js", array('jquery'));

    if( is_page_template("templates/arena.php") ){
		//wp_enqueue_script('bootstrap', "{$path}bootstrap.js", array('jquery'));
		wp_enqueue_script('tictactoe', "{$path}tictactoe.js", array('jquery'));
	}
}
add_action( 'wp_footer', 'bouletap_footerscripts' );

// ACF Options page
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}
