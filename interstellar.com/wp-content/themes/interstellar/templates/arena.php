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
</div>

<div id="arena"></div>
<?php
get_footer();