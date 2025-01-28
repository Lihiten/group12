document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    const flashMessageContainer = document.querySelector(".flashes");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // מונע טעינה מחדש של הדף

        const formData = new FormData(form);

        try {
            const response = await fetch("/login/login", {  // שינוי הנתיב כדי להתאים ל-Flask
                method: "POST",
                body: formData,
            });


            const result = await response.json();

            // ננקה קודם את ההודעות הישנות
            flashMessageContainer.innerHTML = "";

            if (result.success) {
                // אם ההתחברות הצליחה, מפנה לדף הבית
                window.location.href = "/";
            } else {
                // אחרת, נציג הודעת שגיאה מהשרת
                const errorMessage = document.createElement("li");
                errorMessage.classList.add(result.success ? "success" : "error");
                errorMessage.textContent = result.message;
                flashMessageContainer.appendChild(errorMessage);
            }
        } catch (error) {
            console.error("Error during login:", error);
            flashMessageContainer.innerHTML = `<li class="error">An unexpected error occurred. Please try again.</li>`;
        }
    });
});
