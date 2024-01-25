// QUOTE GENERATOR

var quote = document.getElementById('quote');
var quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', function() {
    var generatedQuote = document.createElement("p");
    generatedQuote.classList.add("generatedQuote");
    quote.appendChild(generatedQuote);
    
    var x = document.querySelector(".generatedQuote");

    fetch("https://api.quotable.io/random")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      var generatedQuote = data.content;
      x.innerText = generatedQuote;
    })
    .catch(function(error) {
        console.log(error);
    });
});


// EMAILJS

// Get all needed elements from the DOM

var contactForm = document.querySelector("#contact-form");
var messageToUser = document.querySelector("#message-to-user");
var nameInput = document.querySelector("#user_name");
var emailInput = document.querySelector("#user_email");
var messageInput = document.querySelector("#message");

// Get needed data from email JS

var publicKey = "D_W7sXEebc_z3wXG_";
var serviceID = "service_tf0lllb";
var templateID = "template_7jpa9ur";

// Initialize email JS with public key

emailjs.init(publicKey);

// Add submit event to the form

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    messageToUser.innerText = "It will only take a moment...";
// Get all input fields values
var inputFields = {
name: nameInput.value,
email: emailInput.value,
message: messageInput.value
}

// Send the email - add service, template ID and input field values

emailjs.send(serviceID, templateID, inputFields)
.then(function() {
messageToUser.innerText = "Message sent! I will reach out to you in 24 hours.";
// Clear out all input fields
nameInput.value = "";
emailInput.value = "";
messageInput.value = "";
}, function(error) {
console.log('FAILED...', error);
messageToUser.innerText = "Something went wrong...";
});
});