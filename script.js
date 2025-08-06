// =========================
// Part 1: Event Handling
// =========================

const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  greeting.textContent = "Hello there! 👋";
});

// =========================
// Part 2.1: Light/Dark Mode
// =========================

const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =========================
// Part 2.2: Counter Buttons
// =========================

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const countDisplay = document.getElementById("count");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// =========================
// Part 3: Form Validation
// =========================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (name === "" || email === "" || password === "") {
    formMsg.textContent = "All fields are required!";
    formMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMsg.textContent = "Enter a valid email!";
    formMsg.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMsg.textContent = "Password must be at least 6 characters!";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Successfully Registered ✅";
  formMsg.style.color = "green";
});
