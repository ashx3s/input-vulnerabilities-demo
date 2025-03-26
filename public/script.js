// Function to handle form submission and display a thank you message
function validateField(el) {
  if (!el.validity.valid) {
    console.error("Input is invalid!", el.id, el.validationMessage);
    console.log(el);
    return false;
  } else {
    console.log("Input is valid", el.id);
    return true;
  }
}
function submitForm() {
  // Get user inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  /*
  if (
    !validateField(name) ||
    !validateField(email) ||
    !validateField(phone) ||
    !validateField(message)
  ) {
    console.error("AAH NOT VALIDATED");
    return;
  }
    */
  // Display Thank You message with user details
  const thankYouMessage = `<h3>We've Got Mail!</h3>
                                    <p>Thank you, ${name.value}! Our team will be in touch soon — stay tuned!</p>
                                     <p><strong>Name:</strong> ${name.value}</p>
                                     <p><strong>Email:</strong> ${email.value}</p>
                                     <p><strong>Phone:</strong> ${phone.value}</p>
                                     <p><strong>Message:</strong> ${message.value}</p>`;
  document.getElementById("thankYouMessage").innerHTML = thankYouMessage;
  document.getElementById("thankYouMessage").style.display = "block";

  // Reset form fields
  document.getElementById("contactForm").reset();
}
