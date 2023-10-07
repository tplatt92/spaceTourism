gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.set(".planet_container", { position: "absolute" });

gsap.to(".planet_container", {
	yPercent: 100,
	stagger: -0.5,
	scrollTrigger: {
		trigger: document.body,
		markers: true,
		start: "top top",
		end: "+=2000",
		scrub: 1,
		pin: true,
		pinSpacing: true,
		anticipatePin: 1,
	},
});

// let tl = gsap.timeline();
// tl.from("#moon", { yPercent: 0 })
// 	.from("#mars", { yPercent: 600 })
// 	.from("#europa", { yPercent: 600 })
// 	.from("#titan", { yPercent: 600 });

// ScrollTrigger.create({
// 	animation: tl,
// 	trigger: ".planet_container",
// 	start: "-=0vh",
// 	end: "+=800",
// 	pin: true,
// 	// pinSpacing: true,
// 	// anticipatePin: 1,
// 	scrub: 1,
// });
