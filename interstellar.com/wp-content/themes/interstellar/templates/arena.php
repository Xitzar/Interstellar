<?php
/*
* Template name: Arena
*/
get_header(); 
?>
<div class="site-container">
    <h1><?php the_title(); ?></h1>
    <div class="content-container">
        <?php 
            if ( have_posts() ) {
                while ( have_posts() ) {
                    the_post(); 
                    
                    the_content();
                } // end while
            } // end if
        ?>
    </div>    

    <div class="content-container my2">
        <div id="arena">
            <?php get_template_part("template-parts/tic-tac-toe"); ?>
        </div>
    </div>
</div>
<?php
get_footer();