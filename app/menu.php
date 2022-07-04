<? $page = basename($_SERVER['PHP_SELF']);?>
<header id="header" class="transparent-header" data-sticky-shrink="false">
			<div id="header-wrap">
				<div class="container">
					<div class="header-row justify-content-lg-between">

						<!-- Logo
						============================================= -->
						<div id="logo" class="col-auto me-lg-0 order-lg-2" >
							<a href="index.php" class="standard-logo"><img src="demos/restaurant/images/logo.png" alt="Logo"></a>
							<a href="index.php" class="retina-logo"><img src="demos/restaurant/images/logo@2x.png" alt="Logo"></a>
						</div><!-- #logo end -->

						<div id="primary-menu-trigger">
							<svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

						<!-- Primary Navigation
						============================================= -->
						<nav class="primary-menu col-lg-4 order-lg-1">
							<ul class="menu-container">
								<li class="menu-item"><a class="menu-link <?if ($page == 'index.php') {echo "color";}?>" href="index.php" ><div>O que é</div></a></li>
								<li class="menu-item"><a class="menu-link <?if ($page == 'historico.php') {echo "color";}?>" href="historico.php"><div>Histórico</div></a></li>
								<li class="menu-item"><a class="menu-link <?if ($page == 'numeros.php') {echo "color";}?>" href="numeros.php"><div>Números</div></a></li>
							</ul>
						</nav>

						<nav class="primary-menu col-lg-5 order-lg-3" >
							<ul class="menu-container justify-content-lg-end">
								<li class="menu-item"><a class="menu-link <?if ($page == 'universidades.php') {echo "color";}?>" href="universidades.php"><div>Universidades</div></a></li>
								<li class="menu-item"><a class="menu-link <?if ($page == 'sucesso.php') {echo "color";}?>" href="sucesso.php"><div>Sucessos</div></a></li>
								<li class="menu-item"><a class="menu-link <?if ($page == 'inscrevase.php') {echo "color";}?>" href="inscrevase.php"><div>Inscreva-se</div></a></li>
							</ul>
						</nav><!-- #primary-menu end -->
					</div>
				</div>
			</div>
			<div class="header-wrap-clone"></div>
		</header><!-- #header end -->