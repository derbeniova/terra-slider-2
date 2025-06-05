(() => {
	let swiper = new Swiper(".swiper-container", {
		resistance: false,
		longSwipesRatio: .1,
		loop: false,
		speed: 1000,
		centeredSlides: true,
		navigation: {
			prevEl: ".swiper-prevEl",
			nextEl: ".swiper-nextEl"
		},
		autoplay: {
			delay: 5500
		},
		plugins: [SwiperPluginAutoPlay, SwiperPluginNavigation]

	});

	new Promise((resolve, reject) => {
		let sc;
		if (sc = document.querySelector(".swiper-container")) {
			if (sc.querySelector(".swiper-wrapper").hasAttribute("style")) {
				resolve();
			}
		}
	}).then(() => {
		swiper.slideTo(1, 0);
		swiper.env.element.$el.classList.add("swiper-container_active");
	})
})();


