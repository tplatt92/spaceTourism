// Scroll Effects
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let mm = gsap.matchMedia();

// Scroll effect on destination panels
mm.add("(min-width: 35em)", () => {
	gsap.set(".planet_container", { position: "absolute" });

	gsap.to(
		".home__wrapper > :nth-child(4), .home__wrapper > :nth-child(3), .home__wrapper > :nth-child(2)",
		{
			yPercent: 100,
			stagger: -0.5,
			scrollTrigger: {
				trigger: document.body,
				markers: false,
				start: "top top",
				end: "+=2000",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				anticipatePin: 1,
				snap: 1,
			},
		}
	);
});

// Paralax effect on Text

mm.add("(min-width: 35em)", () => {
	// gsap.set(".desktop__flex_text", { position: "absolute" });

	gsap.from("#moon", {
		yPercent: -20,
	});

	gsap.from("#mars", {
		yPercent: -40,
		opacity: 0.8,
	});

	gsap.from("#europa", {
		yPercent: -60,
		opacity: 0.8,
	});

	gsap.from("#titan", {
		yPercent: -80,
		opacity: 0.8,
	});

	gsap.to(".home__title", {
		yPercent: 5,
		stagger: -0.5,

		scrollTrigger: {
			trigger: document.body,
			markers: false,
			start: "top top",
			end: "+=2000",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});

	gsap.to(".home__photo", {
		yPercent: 3,
		stagger: -0.5,

		scrollTrigger: {
			trigger: document.body,
			markers: false,
			start: "top top",
			end: "+=2000",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});

	gsap.to(".home__text", {
		lines: 1,
		yPercent: 5,
		stagger: -0.5,
		opacity: 0.7,
		scrollTrigger: {
			trigger: document.body,
			markers: false,
			start: "top top",
			end: "+=2000",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});

	gsap.to(".home__links", {
		yPercent: 5,
		stagger: -0.5,
		opacity: 0.7,
		scrollTrigger: {
			trigger: document.body,
			markers: false,
			start: "top top",
			end: "+=2000",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});
});

mm.add("(max-width: 62em)", () => {
	gsap.set(".desktop__flex_text", {
		yPercent: -20,
	});
});

mm.add("(max-width: 35em)", () => {
	gsap.set(".desktop__flex_text", {
		yPercent: 0,
	});
});
