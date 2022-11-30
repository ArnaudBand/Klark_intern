<!DOCTYPE html>
<html lang="en">
<!--begin::Head-->

<head>
	<base href="" />
	<title></title>
	<meta charset="utf-8" />
	<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
	<!--begin::Fonts(mandatory for all pages)-->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
	<!--end::Fonts-->
	<!--begin::Global Stylesheets Bundle(mandatory for all pages)-->
	<link href="styles/uikit/plugins/global/plugins.bundle.css?v=<?php echo filemtime('styles/uikit/plugins/global/plugins.bundle.css') ?>" rel="stylesheet" type="text/css" />
	<link href="styles/uikit/css/style.bundle.css?v=<?php echo filemtime('styles/uikit/css/style.bundle.css') ?>" rel="stylesheet" type="text/css" />
	<!--end::Global Stylesheets Bundle-->
	<!-- our custom styles -->
	<link href="styles/main.css?v=<?php echo filemtime("styles/main.css"); ?>" rel="stylesheet" type="text/css" />
	<link href="styles/raw-main.css?v=<?php echo filemtime("styles/raw-main.css"); ?>" rel="stylesheet" type="text/css" />
	<!-- our custom styles end-->
</head>
<!--end::Head-->
<!--begin::Body-->

<body id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-sidebar-stacked="true" data-kt-app-toolbar-enabled="true" class="app-default">

	<div id="app_container">
		<!-- Begin::your code -->

		<!-- Begin::Header -->
		<header class="header rounded-top m-2">
			<div class="row">
				<div class="col border-end py-2 d-flex justify-content-start align-items-center">
					<h1 class="px-4 text-black-50">Preview</h1>
					<a class="link_approved py-2 px-4 rounded" href="#">
						<span><i class="fa-solid fa-bars"></i></span>
						Approved
					</a>
				</div>
				<div class="col py-2">
					<h1>Activity</h1>
				</div>
			</div>
		</header>
		<!-- End::Header -->

		<!-- Begin::Main -->

		<main class="carousel">
			<div class="d-flex">
				<button class="border-0 prev"> < </button>
					<button class="border-0 next"> > </button>
			</div>
		</main>

		<!-- End::Main -->

		<!-- End::your code -->
	</div>

	<!--begin::Javascript-->
	<script>
		var hostUrl = "scripts/lib/uikit/";
	</script>
	<script src="scripts/lib/uikit/plugins/global/plugins.bundle.js?v=<?php echo filemtime('scripts/lib/uikit/plugins/global/plugins.bundle.js') ?>"></script>
	<script src="scripts/lib/uikit/js/scripts.bundle.js?v=<?php echo filemtime('scripts/lib/uikit/js/scripts.bundle.js') ?>"></script>
	<script src="scripts/lib/uikit/js/widgets.bundle.js?v=<?php echo filemtime('scripts/lib/uikit/js/widgets.bundle.js') ?>"></script>

	<script src="scripts/lib/custom.js?v=<?php echo filemtime('scripts/lib/custom.js') ?>"></script>
	<!--end::Javascript-->
</body>
<!--end::Body-->

</html>