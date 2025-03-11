// Function to handle form submission and display a thank you message
function submitForm() {
  // Get user inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Display Thank You message with user details
  const thankYouMessage = `<h3>We've Got Mail!</h3>
                                    <p>Thank you, ${name}! Our team will be in touch soon — stay tuned!</p>
                                     <p><strong>Name:</strong> ${name}</p>
                                     <p><strong>Email:</strong> ${email}</p>
                                     <p><strong>Phone:</strong> ${phone}</p>
                                     <p><strong>Message:</strong> ${message}</p>`;
  document.getElementById("thankYouMessage").innerHTML = thankYouMessage;
  document.getElementById("thankYouMessage").style.display = "block";

  // Reset form fields
  document.getElementById("contactForm").reset();
}
