document.addEventListener("DOMContentLoaded", () => {
	// Define custom animations for different sections of the webpage
	const elements = [
			{ selector: ".hero h1",        animation: "fade-down", delay: 300, duration: 1000 },
			{ selector: ".hero p",         animation: "fade-up",   delay: 600, duration: 1000 },
			{ selector: ".cta-button",     animation: "fade-up",   delay: 900, duration: 1000 },
			{ selector: ".about-text",     animation: "fade-right",delay: 300, duration: 1500 },
			{ selector: ".about-image",    animation: "fade-left", delay: 600, duration: 1500 },
			{ selector: ".skill",          animation: "zoom-in",   delay: 200, duration: 800  },
			{ selector: ".project-card",   animation: "flip-up",   delay: 200, duration: 1500 },
			{ selector: ".contact-section",animation: "slide-up",  delay: 300, duration: 1500 }
	];

	// Apply custom animations to each element defined above
	elements.forEach(({selector, animation, delay, duration}) => {
			document.querySelectorAll(selector).forEach(element => {
					element.dataset.aos = animation;
					element.dataset.aosDelay = delay.toString();
					element.dataset.aosDuration = duration.toString();
			});
	});

	// Initialize AOS (Animate On Scroll) library with global and customizable settings
	AOS.init({
			disable: false, // Enable AOS on all devices
			startEvent: "DOMContentLoaded", // Event that triggers AOS initialization
			initClassName: "aos-init", // Class applied after initialization
			animatedClassName: "aos-animate", // Class applied on animation
			useClassNames: false, // Use `data-aos` values as classes on scroll
			disableMutationObserver: false, // Enable automatic mutation detection
			debounceDelay: 50, // Delay for window resize debounce (advanced setting)
			throttleDelay: 99, // Delay for scroll throttle (advanced setting)
			offset: 120, // Trigger point offset (px) from the original point
			delay: 0, // Default delay (ms) for animations
			duration: 700, // Default duration (ms) for animations
			easing: "ease-in-out", // Default easing for animations
			once: false, // Execute animations only once
			mirror: false, // Animate elements out when scrolling past them
			anchorPlacement: "top-bottom" // Position of the trigger element relative to the viewport
	});
});
