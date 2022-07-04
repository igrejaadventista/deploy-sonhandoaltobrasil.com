<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

    <? include_once "meta.php";?>

	<!-- Stylesheets
	============================================= -->
	<link href="https://fonts.googleapis.com/css?family=Cookie|Open+Sans:400,600,700,800,900|Poppins:300,400,500,600,700|Playfair+Display:400,400i,700,700i,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
	<link rel="stylesheet" href="style.css" type="text/css" />
	<link rel="stylesheet" href="css/dark.css" type="text/css" />
	<link rel="stylesheet" href="css/font-icons.css" type="text/css" />
	<link rel="stylesheet" href="css/animate.css" type="text/css" />
	<link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
	<link rel="stylesheet" href="css/swiper.css" type="text/css" />

	<link rel="stylesheet" href="one-page/css/et-line.css" type="text/css" />

	<!-- restaurant Demo Specific Stylesheet -->
	<link rel="stylesheet" href="demos/restaurant/restaurant.css" type="text/css" />
	<link rel="stylesheet" href="demos/restaurant/css/fonts.css" type="text/css" />
	<!-- / -->

	<link rel="stylesheet" href="css/custom.css" type="text/css" />


	<link rel="stylesheet" href="css/colors.php?color=f68c3d" type="text/css" />

	<!-- Document Title
	============================================= -->
	<title>Sonhando Alto - Downloads</title>

</head>

<body class="stretched sticky-footer page-transition" data-loader-html="<span class='pizza'> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> </span>">

	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="overflow-hidden">

    <? include_once "menu.php"; ?>

		<!-- Page Title
		============================================= -->
		<section id="page-title" class="page-title-parallax page-title-dark page-title-center include-header" style="background-image: url('demos/restaurant/images/geral.jpg'); background-size: cover; padding: 80px 0 80px;" data-bottom-top="background-position:0 0px;" data-top-bottom="background-position:0px -300px;">

			<div class="container clearfix">
				<img src="images/tit_numeros.png">
				<span class="fw-normal">O Sonhando Alto é feito de resultados,<br> veja quanto crescemos nos últimos 20 anos.</span>
			</div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; z-index: 3; background: url('demos/restaurant/images/sketch2.png') repeat center bottom; background-size: auto 100%; height: 40px; margin-bottom: -10px;"></div>
		</section><!-- #page-title end -->

		<!-- Content
		============================================= -->
		<section id="content">
			<div class="content-wrap py-0" style="overflow: visible;">
				<div class="container">
                <ul class="iconlist mb-0">
                    <p>&nbsp;</p>
                    <h3>Downloads</h3>
                                <?
                                $path    = 'downloads/';
                                $files = scandir($path);
                                $files = array_diff(scandir($path), array('.', '..', '.DS_Store'));
                                foreach($files as $file){
                                 ?>
                                
								<li><i class="icon-line-folder"></i><a href="#"><?=$file;?></a>
									<ul>
                                        <?
                                        $path2    = 'downloads/'.$file.'/';
                                        $files2 = scandir($path2);
                                        $files2 = array_diff(scandir($path2), array('.', '..', '.DS_Store'));
                                        foreach($files2 as $file2){
                                        ?>
										<li><i class="icon-line-download"></i><a href="<?=$path2.'/'.$file2;?>"  download><div><?=$file2;?></div></a></li>
										<? } ?>

									</ul>
								</li>
                                <?} ?>
								

							</ul>

				</div>

				

				<div class="section m-0 bg-transparent" style="padding: 80px 0 70px;">
					<div class="container">
						<div class="mx-auto d-flex justify-content-center center" style="max-width: 900px;">
							<h3 class="mb-0 ls0">Venha construir o seu futuro... <a href="inscrevase.php" class="button button-circle button-xlarge button-light text-white ls0 nott mt-0 mb-1 ms-3" style="position: relative;"><span>Inscreva-se</span> <i class="icon-line-arrow-right fw-semibold"></i></a></h3>
					</div>
				</div>

			</div>

			<div style="position: absolute; bottom: 0; left: 0; width: 100%; z-index: 3; background: url('demos/restaurant/images/sketch-header.png') repeat center bottom; background-size: auto 100%; height: 40px; margin-bottom: -10px;"></div>
		</section><!-- #content end -->

		<? include_once "base.php"; ?>

	</div><!-- #wrapper end -->

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-line-arrow-up"></div>

	<!-- JavaScripts
	============================================= -->
	<script src="js/jquery.js"></script>
	<script src="js/plugins.min.js"></script>

	<!-- Footer Scripts
	============================================= -->
	<script src="js/functions.js"></script>


</body>
</html>