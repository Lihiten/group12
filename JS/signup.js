// שמירת שם המשתמש ב-Local Storage בעת הרשמה
function saveUserName() {
    const fullName = document.getElementById("full-name").value;
    const firstName = fullName.split(" ")[0]; // לוקח רק את השם הפרטי
    localStorage.setItem("masterName", firstName); // שמירת השם הפרטי ב-Local Storage
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            let hasError = false;

            // פונקציה לבדיקה והצגת הודעת שגיאה
            function validateField(input, condition, errorMessage) {
                const errorElement = input.nextElementSibling;
                if (!condition) {
                    errorElement.textContent = errorMessage;
                    errorElement.style.display = "block";
                    input.classList.add("error");
                    hasError = true;
                } else {
                    errorElement.textContent = "";
                    errorElement.style.display = "none";
                    input.classList.remove("error");
                }
            }

            // בדיקת מייל
            const emailInput = document.getElementById("email");
            validateField(
                emailInput,
                emailInput.value.includes("@") && emailInput.value.includes("."),
                "Please enter a valid email address."
            );

            // בדיקת סיסמה
            const passwordInput = document.getElementById("password");
            validateField(
                passwordInput,
                passwordInput.value.length >= 8,
                "Password must be at least 8 characters long."
            );

            // בדיקת גיל
            const ageInput = document.getElementById("age");
            validateField(
                ageInput,
                ageInput.value >= 18,
                "You must be at least 18 years old to sign up."
            );

            // בדיקת טלפון
            const phoneInput = document.getElementById("phone");
            validateField(
                phoneInput,
                /^0\d{9}$/.test(phoneInput.value),
                "The phone number must be 10 digits long and start with 0."
            );

            // אם יש שגיאות, עצור את שליחת הטופס
            if (hasError) {
                event.preventDefault();
            } else {
                // שמירת שם המשתמש והפניה לדף הבית
                saveUserName();
                window.location.href = "../HTML/index.html";
            }
        });
    }
});
