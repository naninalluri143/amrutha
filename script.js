document.getElementById("email-form").addEventListener("submit", "DOMContentLoaded", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const Name = document.getElementById("name").value; 
  const Email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const adress = document.getElementById("adress").value;

  // Use Email.js to send the email
  emailjs.send("YOUR_EMAIL_SERVICE_ID", "YOUR_EMAIL_TEMPLATE_ID", {
    name : Name,
    to_email: Email,
    Age : age,
    Sex : sex,
    Adress : adress 
    
  })
  .then(function(response) {
    console.log("Email sent successfully", response);
  }, function(error) {
    console.error("Email could not be sent", error);
  });
});
