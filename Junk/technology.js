console.log("ai");

// Scroll Effects
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let mm = gsap.matchMedia();

// Scroll effect on crew panels

// Desktop & Tablet
mm.add("(min-width: 35em)", () => {
	gsap.set("main", { position: "absolute" });

	gsap.to("main > :nth-child(4), main > :nth-child(3)", {
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
	gsap.to(".technology__info__wrapper", {
		xPercent: 10,
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

	gsap.to(".technology__photo", {
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
