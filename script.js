document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const errorMessage = document.querySelector(".error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Thank you for subscribing!");
    }
});
