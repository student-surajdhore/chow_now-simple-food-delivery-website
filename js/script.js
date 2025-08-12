// Open Modal
document.querySelectorAll("a[href='']").forEach(link => {
  if (link.textContent.toLowerCase().includes("log in") || link.textContent.toLowerCase().includes("signup")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("authModal").style.display = "flex";
      if (link.textContent.toLowerCase().includes("signup")) toggleForm(true);
    });
  }
});

// Close Modal
function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

// Toggle between login/signup
function toggleForm(signup = false) {
  const title = document.getElementById("authTitle");
  const toggle = document.getElementById("toggleText");
  if (title.textContent === "Login" || signup) {
    title.textContent = "Signup";
    toggle.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
  } else {
    title.textContent = "Login";
    toggle.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Signup</a>`;
  }
}

// Dummy form submit
function submitForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both fields");
    return;
  }

  alert("Logged in successfully! ✅");
  closeModal();
}
