<?php ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="stylesheet" href="https://use.typekit.net/mrg7fwo.css">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="page" class="site">
        <header id="masthead" class="site-header" role="banner">

            <?php if ( has_nav_menu( 'top' ) ) : ?>
            <div class="navigation-top">
                <div class="wrap">
                    <?php get_template_part( 'template-parts/navigation/navigation', 'top' ); ?>
                </div>
                <!-- .wrap -->
            </div>
            <!-- .navigation-top -->
            <?php endif; ?>

        </header>
        <!-- #masthead -->



        <div class="site-content-contain">
            <div id="content" class="site-content">
