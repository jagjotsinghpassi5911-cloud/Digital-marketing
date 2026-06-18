// =====================================
// Jagjot Solutions Private Limited
// Premium Agency Script
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Animated Counter
    // ===============================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

    // ===============================
    // Contact Form Validation
    // ===============================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting Jagjot Solutions Private Limited. Our team will contact you shortly."
            );

            contactForm.reset();

        });

    }

    // ===============================
    // Smooth Reveal Animation
    // ===============================

    const revealElements = document.querySelectorAll(
        ".service-card, .stat-card, .testimonial-card, .case-card, .why-card"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

});

// =====================================
// Back To Top Button
// =====================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "95px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#D4AF37";
topBtn.style.color = "#000";
topBtn.style.fontSize = "20px";
topBtn.style.fontWeight = "bold";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =====================================
// Header Shadow On Scroll
// =====================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(212,175,55,0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =====================================
// Card Hover Effects
// =====================================

const cards = document.querySelectorAll(
    ".service-card, .stat-card, .testimonial-card, .case-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =====================================
// WhatsApp Tracking
// =====================================

const whatsappButton = document.querySelector(".whatsapp-btn");

if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        console.log("WhatsApp Clicked");

    });

}

// =====================================
// Console Branding
// =====================================

console.log(
    "Jagjot Solutions Private Limited | Google Ads Lead Generation Agency"
);  
/* Portfolio Scroll Reveal */

const portfolioCards =
document.querySelectorAll(".portfolio-card");

const portfolioObserver =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

portfolioCards.forEach((card)=>{

card.classList.add("hidden");

portfolioObserver.observe(card);

});
const reveals =
document.querySelectorAll('.reveal');

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('active');

}

});

},{
threshold:0.15
});

reveals.forEach((item)=>{

observer.observe(item);

});
document.getElementById("leadForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! We will contact you shortly.");

this.reset();

});