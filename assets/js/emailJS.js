// EmailJS integration for contact form
(function(){
    emailjs.init("vVzjqDpdp-JL-z-wf"); // Replace with your actual EmailJS public key
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        emailjs.sendForm("service_5h558jm", "Wu7UvnEzGQqViqBmHSLGW", this)
          .then(function () {
            alert("Message sent successfully! 🎉");
            form.reset(); // Optional: clear form after sending
          }, function (error) {
            alert("Failed to send message 😞 Try again.");
            console.error("EmailJS Error:", error);
          });
      });
    }
  });
  