
$(function () {
	var jsonCallback = function (jsdata) {
		// Text values
		$("[textKey]").each(function (_idx) {
			var strTr = jsdata[$(this).attr("textKey")];
			$(this).html(strTr);
		});

		// Pdf link
		$("#cv_image").attr("src", jsdata["cv_image_src"]);
		$("#cv_link").attr("href", jsdata["cv_href"]);

		// Form messages
		$("#name").attr("placeholder", jsdata["form_placeholder_name"]);
		$("#email").attr("placeholder", jsdata["form_placeholder_email"]);
		$("#message").attr("placeholder", jsdata["form_placeholder_message"]);
	}

	$.translate = function (lang) {
		$("#lang-selector").html(lang);

		// Change video default language
		$(".yt-vid-to-translate").each(function (_idx) {
			var url = $(this).attr("src");
			var vidLang = url.substr(url.length - 2, 2);

			if (vidLang == "en" || vidLang == "fr")
				$(this).attr("src", url.substr(0, url.length - 2) + lang);
		});

		// Set all content in French
		if (lang == "fr") {
			var url = "./assets/documents/langs/fr.json";
			$.getJSON(url, jsonCallback);
		}
		// Set all content in English
		else {
			// Text values
			var url = "./assets/documents/langs/en.json";
			$.getJSON(url, jsonCallback);
		}
	}

	// By default, use navigator language to translate
	$.translate(navigator.language.substr(0, 2));
});