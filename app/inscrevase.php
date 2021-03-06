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

	<link rel="stylesheet" href="css/components/datepicker.css" type="text/css" />

	<!-- restaurant Demo Specific Stylesheet -->
	<link rel="stylesheet" href="demos/restaurant/restaurant.css" type="text/css" />
	<link rel="stylesheet" href="demos/restaurant/css/fonts.css" type="text/css" />
	<!-- / -->

	<link rel="stylesheet" href="css/custom.css" type="text/css" />
	<link rel="stylesheet" href="css/colors.php?color=f68c3d" type="text/css" />

	<!-- Document Title
	============================================= -->
	<title>Sonhando Alto - Inscreva-se</title>

</head>

<body class="stretched sticky-footer page-transition" data-loader-html="<span class='pizza'> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> <span class='slice'></span> </span>">

	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">

	<? include_once "menu.php";?>

		<!-- Slider
		============================================= -->
		<section id="slider" class="slider-element slider-reservation h-auto include-header">

			<div class="gmap min-vh-60 min-vh-lg-100" style="background-image: url('demos/restaurant/images/vem.jpg'); background-size: cover"></div>

			<div class="p-5 reservation-form rounded bg-white">
				<h3 class="font-secondary h1 color">Inscreva-se.</h3>
				<div>O preenchimento de todos os campos ?? obrigat??rio.</div>

				<div class="form-widget mt-4 mt-lg-0" data-loader="button">

					<div class="form-result"></div>

					<form class="mb-0 row" id="template-contactform" name="template-contactform" action="include/form.php" method="post">

						<div class="form-process">
							<div class="css3-spinner">
								<div class="css3-spinner-scaler"></div>
							</div> 
						</div>

						<div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="sm-form-control border-form-control required" placeholder="Nome" />
						</div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-idade" name="template-contactform-idade" value="" class="sm-form-control border-form-control required" placeholder="Idade" />
						</div>
						<div class="col-sm-6 mb-3">
							<input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email sm-form-control border-form-control" placeholder="E-mail" />
						</div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-celular" name="template-contactform-celular" value="" class="required sm-form-control border-form-control" placeholder="Celular/WhatsApp" />
						</div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-instagram" name="template-contactform-instagraml" value="" class="required sm-form-control border-form-control" placeholder="Instagram" />
						</div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-cidade" name="template-contactform-cidade" value="" class="required sm-form-control border-form-control" placeholder="Cidade" />
						</div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-cep" name="template-contactform-cep" value="" class="required sm-form-control border-form-control" placeholder="CEP" />
						</div>
                        <div class="col-6 mb-3">
							<select class="custom-select sm-form-control border-form-control"  id="template-contactform-estado" name="template-contactform-estado">
								<option value="disabled" value="" disabled selected>Estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amap??</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Cear??</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Esp??rito Santo</option>
                                <option value="GO">Goi??s</option>
                                <option value="MA">Maranh??o</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Par??</option>
                                <option value="PB">Para??ba</option>
                                <option value="PR">Paran??</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piau??</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rond??nia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">S??o Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                                <option value="SS">--</option>

							</select>
						</div>

                        

						<div class="col-6 mb-3">
							<select class="custom-select sm-form-control border-form-control"  id="template-contactform-nivel" name="template-contactform-nivel">
                            <option value="disabled" disabled selected>N??vel de Escolaridade</option>
								<option value="N??o iniciei o Ensino M??dio">N??o iniciei o Ensino M??dio</option>
								<option value="1?? Ano">1?? Ano</option>
                                <option value="2?? Ano">2?? Ano</option>
                                <option value="3?? Ano">3?? Ano</option>
                                <option value="J?? terminei o Ensino M??dio">J?? terminei o Ensino M??dio</option>
                                <option value="J?? iniciei a faculdade">J?? iniciei a faculdade</option>

							</select>
						</div>
                        <div class="clear"></div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-curso" name="template-contactform-curso" value="" class="required sm-form-control border-form-control" placeholder="Qual curso deseja fazer?" />
						</div>
                        <div class="col-sm-6 mb-3">
							<input type="text" id="template-contactform-universidade" name="template-contactform-universidade" value="" class="required sm-form-control border-form-control" placeholder="Em qual universidade deseja estudar?" />
						</div>
					

						<div class="clear"></div>

						<div class="col-12 mb-0">
							<button class="button button-circle button-large text-white ms-0 mt-3" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Enviar Formul??rio</button>
						</div>

						<div class="clear"></div>

						<div class="col-12 d-none">
							<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
						</div>

						<input type="hidden" name="prefix" value="template-contactform-">

					</form>

				</div>
			</div>

		</section>

		<!-- Content
		============================================= -->
		<section id="content">

		</section><!-- #content end -->

		<? include_once "base.php";?>

	</div><!-- #wrapper end -->

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-line-arrow-up"></div>

	<!-- JavaScripts
	============================================= -->
	<script src="js/jquery.js"></script>
	<script src="js/plugins.min.js"></script>
	<script src="https://maps.google.com/maps/api/js?key=YOUR-API-KEY"></script>

	<!-- Travel Demo Specific Script -->
	<script src="js/components/datepicker.js"></script>

	<!-- Footer Scripts
	============================================= -->
	<script src="js/functions.js"></script>

	<script>

		$(function() {
			$('.travel-date-group').datepicker({
				autoclose: true,
				startDate: "today",
				todayHighlight: true
			});
		});


	</script>

</body>
</html>