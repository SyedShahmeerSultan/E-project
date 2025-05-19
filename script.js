// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the form and success message container
  const form = document.querySelector("form");
  const formSuccess = document.getElementById("formSuccess");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Simple form validation (you can expand this)
    let isValid = true;
    const formElements = form.querySelectorAll("input, textarea");

    // Loop through all form elements to check validity
    formElements.forEach(function (element) {
      if (!element.checkValidity()) {
        isValid = false;
        element.classList.add("is-invalid");
      } else {
        element.classList.remove("is-invalid");
      }
    });

    // If form is valid, show the success message
    if (isValid) {
      formSuccess.classList.remove("d-none"); // Show success message
      form.reset(); // Reset the form
    }
  });
});

// Detail Page
document.querySelector(".add-to-cart").addEventListener("click", function () {
  const quantity = document.querySelector("#quantity").value;
  alert(`Added ${quantity} items to the cart.`);
});

document.querySelector(".buy-now").addEventListener("click", function () {
  const quantity = document.querySelector("#quantity").value;
  alert(`You are buying ${quantity} items now.`);
});
