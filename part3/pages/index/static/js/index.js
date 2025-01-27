// הצגת השם "Hi Master" בעמוד הבית
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        const masterName = localStorage.getItem("masterName"); // קריאת השם מ-Local Storage

        if (masterName) {
            const greeting = document.createElement("p");
            greeting.textContent = `Hi Master ${masterName}!`;
            greeting.classList.add("greeting-text"); // הוספת מחלקה לעיצוב
            const logoText = document.querySelector(".logo-text"); // מוצא את מיקום ה-Logo Text
            if (logoText) {
                logoText.insertBefore(greeting, logoText.firstChild); // מוסיף את הטקסט מעל הכותרת
            } else {
                console.error("Element with class 'logo-text' not found.");
            }
        } else {
            console.warn("masterName not found in localStorage.");
        }
    }
});
