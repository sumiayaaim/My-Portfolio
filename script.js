// Intro Animations
gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".hero .text", { duration: 1, x: -100, opacity: 0, delay: 0.3, ease: "power3.out" });
gsap.from(".hero img", { duration: 1, x: 100, opacity: 0, delay: 0.6, ease: "power3.out" });

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-content img", {
  scrollTrigger: ".about",
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".about-content .text", {
  scrollTrigger: ".about",
  x: 100,
  opacity: 0,
  duration: 1
});

gsap.from(".card", {
  scrollTrigger: ".cards",
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

