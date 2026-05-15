// Typewriter Effect
const words = [
    "Next-Gen Mobile Apps",
    "Intelligent ChatBots",
    "Agentic AI Workflows",
    "Data-Driven Products",
    "n8n Workflows"
];
let i = 0;
let timer;
let isDeleting = false;
let charIndex = 0;

function typeWriter() {
    const currentWord = words[i];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex <= currentWord.length) {
        document.getElementById("typewriter").innerHTML = currentWord.substring(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        document.getElementById("typewriter").innerHTML = currentWord.substring(0, charIndex);
        charIndex--;
    }

    if (charIndex === currentWord.length + 1) {
        isDeleting = true;
        clearTimeout(timer);
        timer = setTimeout(typeWriter, 1500); // Pause at the end of word
        return;
    } else if (charIndex === -1) {
        isDeleting = false;
        i = (i + 1) % words.length; // Next word
    }

    timer = setTimeout(typeWriter, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();

    // Intersection Observer for scroll animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Particles.js config
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#64ffda"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                },
                "size": {
                    "value": 3,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#64ffda",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.8
                        }
                    },
                    "push": {
                        "particles_nb": 3
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Navbar shadow on scroll (always visible)
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.boxShadow = currentScrollPos < 50 ? "none" : "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    }
});
