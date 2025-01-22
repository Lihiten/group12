document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            // איפוס הודעות שגיאה קודמות
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

            const emailInput = document.getElementById("email");
            const phoneInput = document.getElementById("phone");

            // בדיקת מייל
            if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
                isValid = false;
                const error = emailInput.nextElementSibling;
                error.textContent = "Please enter a valid email address.";
            }

            // בדיקת טלפון
            if (!/^\d{10}$/.test(phoneInput.value)) {
                isValid = false;
                const error = phoneInput.nextElementSibling;
                error.textContent = "The phone number must be exactly 10 digits long.";
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});
