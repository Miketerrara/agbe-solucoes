import './style.css'
import '../node_modules/@flaticon/flaticon-uicons/css/all/all.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero__mask-img1', {
  scrollTrigger: '.hero__mask-img1',
  y: -600,
  delay:.2,
  ease: 'in'
});

ScrollTrigger.addEventListener("scrollEnd", () =>
  console.log("scrolling ended!")
);