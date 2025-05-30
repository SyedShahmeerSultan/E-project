// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default submission

      let isValid = true;
      const elements = form.querySelectorAll("input, textarea");

      elements.forEach(function (element) {
        if (!element.checkValidity()) {
          isValid = false;
          element.classList.add("is-invalid");
        } else {
          element.classList.remove("is-invalid");
        }
      });

      if (!form.checkValidity()) {
        isValid = false;
      }

      form.classList.add("was-validated");

      if (isValid) {
        formSuccess.classList.remove("d-none");
        form.reset();
        form.classList.remove("was-validated");
      }
    });
  }

  // Handle "Add to Cart" button
  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const quantity = document.querySelector("#quantity")?.value || 1;
      alert(`Added ${quantity} item(s) to the cart.`);
    });
  }

  // Handle "Buy Now" button
  const buyNowBtn = document.querySelector(".buy-now");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", function () {
      const quantity = document.querySelector("#quantity")?.value || 1;
      alert(`You are buying ${quantity} item(s) now.`);
    });
  }
});


