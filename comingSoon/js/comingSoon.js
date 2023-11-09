// let launchDate = "Nov 10 2023 12:00:00 GMT+0530";
let launchDate = "Nov 09 2023 20:52:00 GMT+0530";
// import {launchDate} from "../../js/index"
$(window).load(function () {
	$('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function () {
		function centerInit() {

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top": topMargin + "px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top": heroTopMargin + "px"
			});

		}

		$(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function () {



	initializeSite();
	(function () {
		setTimeout(function () { window.scrollTo(0, 0); }, 0);

	if (new Date() > new Date(launchDate)) {
		console.log("not released yet");
		window.location.href = '/index.html';
	}
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: launchDate,
	render: function (data) {
		var el = $(this.el);
		el.empty()
			//.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
			.append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
			.append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
			.append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
			.append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});