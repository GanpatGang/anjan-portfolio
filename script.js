// Typing effect
const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Founder & Developer Of Trinetra"
];

let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = roles[i];
    document.querySelector(".typing").textContent =
        current.substring(0, j);

    if (!isDeleting && j < current.length) {
        j++;
        setTimeout(type, 80);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 40);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % roles.length;
        setTimeout(type, 800);
    }
}
type();

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const speed = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + speed);
            setTimeout(update, 30);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// AOS
AOS.init({
    duration: 1000,
    once: true
});

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    color: { value: "#00f7ff" },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: {
      enable: true,
      color: "#00f7ff"
    }
  }
});
