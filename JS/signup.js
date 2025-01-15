document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const ageInput = document.getElementById("age");
            const phoneInput = document.getElementById("phone");

            // בדיקת מייל
            if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
                event.preventDefault();
                alert("Please enter a valid email address.");
                emailInput.focus();
                return;
            }

            // בדיקת סיסמה
            if (passwordInput.value.length < 8) {
                event.preventDefault();
                alert("Password must be at least 8 characters long.");
                passwordInput.focus();
                return;
            }

            // בדיקת גיל
            if (ageInput.value < 18) {
                event.preventDefault();
                alert("You must be at least 18 years old to sign up.");
                ageInput.focus();
                return;
            }

            // בדיקת טלפון
            if (!/^0\d{9}$/.test(phoneInput.value)) {
                event.preventDefault();
                alert("The phone number must be 10 digits long and start with 0.");
                phoneInput.focus();
                return;
            }

            alert("Sign up successful!");
        });
    }
});
