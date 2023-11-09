// Scroll Effects
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let mm = gsap.matchMedia();

// Scroll effect on destination panels
mm.add("(min-width: 35em)", () => {
	gsap.set(".technology_container", { position: "absolute" });

	gsap.to(".home__wrapper > :nth-child(4), .home__wrapper > :nth-child(3)", {
		xPercent: 100,
		stagger: -0.5,
		scrollTrigger: {
			trigger: document.body,
			markers: false,
			start: "top top",
			end: "+=2000",
			scrub: 1,
			pin: true,
			pinSpacing: true,
		},
	});
});

// Paralax effect on Text

mm.add("(min-width: 64em)", () => {
	// gsap.set(".desktop__flex_text", { position: "absolute" });

	gsap.to(".home__title", {
		xPercent: 2,
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
		xPercent: 5,
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
});
