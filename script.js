document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navItems = document.querySelector(".nav-items");
  const mainContent = document.querySelector(".main-content");

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navItems.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    mainContent.classList.toggle("blur");
  });

  document.addEventListener("click", function (event) {
    if (!navToggle.contains(event.target) && !navItems.contains(event.target)) {
      navItems.classList.remove("active");
      navToggle.classList.remove("active");
      document.body.classList.remove("no-scroll");
      mainContent.classList.remove("blur");
    }
  });

  document.querySelectorAll(".nav-items a").forEach(function (link) {
    link.addEventListener("click", function () {
      navItems.classList.remove("active");
      navToggle.classList.remove("active");
      document.body.classList.remove("no-scroll");
      mainContent.classList.remove("blur");
    });
  });
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

var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
