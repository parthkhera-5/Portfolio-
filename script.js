/* =========================================
   Active Navigation on Scroll
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================================
   Skills Expand / Collapse
========================================= */

function toggleSkill(card) {
  card.classList.toggle("active");
}

/* =========================================
   Hero Typing Animation
========================================= */

const nameText = "Parth Khera";
const typingElement = document.getElementById("typing-name");

let index = 0;

function typeName() {
  if (index < nameText.length) {
    typingElement.textContent += nameText.charAt(index);

    index++;

    setTimeout(typeName, 120);
  }
}

if (typingElement) {
  typeName();
}

/* =========================================
   Fade-in Sections on Scroll
========================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  section.classList.add("hidden-section");
  observer.observe(section);
});

// Contact Form

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject =
      document.getElementById("subject").value.trim() || "Portfolio Contact";
    const message = document.getElementById("message").value.trim();

    // Your email address
    const recipient = "parthkheraxa24@gmail.com";

    const body = `Hello Parth,

Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${name}`;

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" +
      encodeURIComponent(recipient) +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.open(gmailUrl, "_blank");

    document.getElementById("form-confirm").style.display = "block";

    this.reset();
  });
