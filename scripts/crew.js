console.log("ai");

// Scroll Effects
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let mm = gsap.matchMedia();

// Scroll effect on crew panels

// Desktop & Tablet
mm.add("(min-width: 34.98em)", () => {
	gsap.set("main", { position: "absolute" });

	gsap.to("main > :nth-child(4), main > :nth-child(3), main > :nth-child(2)", {
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
			anticipatePin: 1,
		},
	});
});

// Paralax effect on Text

mm.add("(min-width: 62em)", () => {
	gsap.to(".crew__info__wrapper", {
		xPercent: 8,
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

	gsap.to(".crew__photo", {
		xPercent: 3,
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
