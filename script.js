const navToggle = document.querySelector(".nav-toggle");
const navItems = document.querySelector(".nav-items");
const mainContent = document.querySelector(".main-content");

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("active");
  navToggle.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  mainContent.classList.toggle("blur");
});

const observerOptions = {
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document
  .querySelectorAll(
    ".fade-in, .fade-top, .fade-bottom, .text, .animate-img, .sect2-text-animate"
  )
  .forEach((section) => {
    observer.observe(section);
  });

document.querySelector(".send-btn input").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("telephone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("text").value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert("All fields are required.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  // Optionally, you can submit the form here
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.querySelector(".toggle-link");
  const authContainer = document.querySelector(".auth-container");
  const formTitle = authContainer.querySelector("h1");
  const submitButton = authContainer.querySelector("button[type='submit']");
  const form = authContainer.querySelector("form");

  toggleLink.addEventListener("click", () => {
    const isRegister = formTitle.textContent.includes("Register");
    formTitle.textContent = isRegister ? "Login" : "Register";
    submitButton.textContent = isRegister ? "Login" : "Register";
    toggleLink.textContent = isRegister
      ? "Don't have an account? Register"
      : "Already have an account? Login";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const password = form.querySelector("#password").value.trim();

    if (formTitle.textContent.includes("Register") && !name) {
      alert("Name is required.");
      return;
    }

    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password) {
      alert("Password is required.");
      return;
    }

    alert(`${formTitle.textContent} successful!`);
    // Optionally, you can submit the form here
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
