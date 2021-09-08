$(document).ready(() => {
	// Open mailto links in a new tab
	$("a[href^='mailto:']").click(function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var target = $(this).attr('target');
		window.open(href, target ? target : '_self');
	});

	// Force translate
	$("#lang-selector").click(function (e) {
		e.preventDefault();
		var currentLang = $("#lang-selector").html()
		$.translate((currentLang == "fr") ? "en" : "fr");
		$("#lang-selector").blur();
	});

	// Scroll to top button appear
	const limitScrollTopBtn = window.screen.height * 0.2;
	$(document).scroll(() => {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > limitScrollTopBtn) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// Load modales only on click
	const modales = [
		'resume',
		'vuranib',
		'darkness',
		'excessive_speed',
		'ram',
		'perfect_match',
		'g7',
		'rgame'
	];
	modales.forEach(modale => {
		$('#btn-open-modal-' + modale).click(() => {
			$.get('modales/' + modale + '.html', function (data) {
				$('#portfolio-modal')
					.find('.container')
					.replaceWith(data);
				$.translate($("#lang-selector").html());
			});
		});
	});
});