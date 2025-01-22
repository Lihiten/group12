document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");

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

            alert("Login successful!");
        });
    }
});
