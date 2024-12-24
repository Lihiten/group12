// ברכה למשתמש בדף הבית
document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.createElement("p");
    greeting.textContent = "ברוכים הבאים ל-Cook Master!";
    document.querySelector("main").appendChild(greeting);
});

// ולידציה בסיסית לטופס צור קשר
document.querySelector("form")?.addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email.includes("@")) {
        alert("אנא הזן דוא\"ל חוקי.");
        event.preventDefault();
    }

    if (message.trim() === "") {
        alert("אנא מלא את שדה ההודעה.");
        event.preventDefault();
    }
});
