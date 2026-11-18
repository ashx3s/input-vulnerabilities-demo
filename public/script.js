// Generate a random nonce for CSP
function generateNonce() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

// Function to escape HTML to prevent XSS
function escapeHtml(html) {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\'/g, "&#039;")
    .replace(/\"/g, "&quot;");
}

// Function to validate and display error messages
function validateForm() {
  // Clear previous error messages
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  // Get user inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  let isValid = true;
  /*
  // Validate name
  if (!name) {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
    document.getElementById("nameError").textContent =
      "Name can only contain letters, spaces, apostrophes, and hyphens.";
    isValid = false;
  }

  // Validate email
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Validate phone
  if (!phone) {
    document.getElementById("phoneError").textContent =
      "Phone number is required.";
    isValid = false;
  } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be in the format: (123) 456-7890";
    isValid = false;
  }

  // Validate message
  if (!message) {
    document.getElementById("messageError").textContent =
      "Message is required.";
    isValid = false;
  }

  // If all validations pass, display Thank You message


  return false; // Prevent actual form submission for demonstration
  */
  if (isValid) {
    displayThankYouMessage(name, email, phone, message);
  }
}

// Function to display a thank you message
function displayThankYouMessage(name, email, phone, message) {
  const thankYouMessage = `
        <h3>We've Got Mail!</h3>
        <p>Thank you, ${escapeHtml(name)}! Our team will be in touch soon — stay tuned!</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
    `;
  document.getElementById("thankYouMessage").innerHTML = thankYouMessage;
  document.getElementById("thankYouMessage").style.display = "block";

  // Reset form fields
  document.getElementById("contactForm").reset();
}
