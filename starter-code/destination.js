gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// scrollSmoother.create({
// 	smooth: 2,
// 	effects: true,
// 	smoothTouch: 0.1,
// });

// gsap.utils.toArray(".planet_container").forEach((panel, i) => {
// 	scrollTrigger.create({
// 		trigger: panel,
// 		start: "top top",
// 		pin: true,
// 		pinSpacing: false,
// 	});
// });

// let tl = gsap.timeline();
// tl.from("#moon", { yPercent: 0 })
// 	.from("#mars", { yPercent: 600 })
// 	.from("#europa", { yPercent: 600 })
// 	.from("#titan", { yPercent: 600 });

// // let nav = gsap.timeline();
// // nav.from(".nav__wrapper", { yPercent: 0 });
// // ScrollTrigger.create({
// // 	animation: tl,
// // 	trigger: ".planet_container",
// // 	start: "-=vh",
// // 	pin: true,
// // 	// pinSpacing: true,
// // 	// anticipatePin: 1,
// // 	// scrub: 1,
// // });

// ScrollTrigger.create({
// 	animation: tl,
// 	trigger: ".planet_container",
// 	start: "-=120vh",
// 	end: "+=800",
// 	pin: true,
// 	pinSpacing: true,
// 	// anticipatePin: 1,
// 	scrub: 1,
// });

// gsap.timeline({
// 	scrollTrigger: {
// 		scrub: 1,
// 		pin: true,
// 		pinspacing: false,
// 		markers: true,
// 		start: document.body,
// 		end: 799,
// 	},
// });

// timeln.to("moon"{
//     yPercent: 0,
// })

// timeln.addLabel("titan"); //1
// timeln.to("#titan", {
// 	yPercent: 0,
// 	opacity: 1,
// });

// timeln.from("#europa", {
// 	//2
// 	yPercent: 75,
// 	opacity: 0,
// });

// timeln.addLabel("europa");

// timeln.to(
// 	"#titan",
// 	{
// 		scale: 0.95,
// 		yPercent: 0,
// 		opacity: 0.5,
// 	},
// 	"-=0.3"
// );

// timeln.to("#europa", {
// 	yPercent: 0,
// 	opacity: 1,
// });

// timeln.from("#mars", {
// 	yPercent: 75,
// 	opacity: 0,
// });

// timeln.addLabel("mars");

// timeln.to("#europa", {
// 	yPercent: 0,
// 	opacity: 1,
// });

// timeln.to("#mars", {
// 	yPercent: 0,
// 	opacity: 1,
// });

// timeln.from("#moon", {
// 	yPercent: 75,
// 	opacity: 0,
// });

// timeln.addLabel("moon");

// timeln.to("#mars", {
// 	yPercent: 0,
// 	opacity: 1,
// });
