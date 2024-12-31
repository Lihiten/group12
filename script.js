<<<<<<< HEAD
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
=======
// ברכה למשתמש בדף הבית
document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.createElement("p");
    greeting.textContent = "Welcome to Cook Master!";
    document.querySelector("main").appendChild(greeting);
});

// ולידציה בסיסית לטופס צור קשר
document.querySelector("form")?.addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        event.preventDefault();
    }

    if (message.trim() === "") {
        alert("אנא מלא את שדה ההודעה.");
        event.preventDefault();
    }
})// ולידציה למספר הטלפון בטופס
document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("input", function(event) {
        const phone = event.target.value;
        if (!/^0\d{9}$/.test(phone)) {
            event.target.setCustomValidity("The phone number must be 10 digits long and start with 0.");
        } else {
            event.target.setCustomValidity("");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    // תוכן לכל סדנה
    const workshops = {
        italian: {
            title: "Italian Cooking Workshop",
            description: "Learn to make pasta, risotto, and pizza from scratch!",
            menu: ["Homemade Pasta", "Risotto alla Milanese", "Classic Margherita Pizza", "Tiramisu"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        asian: {
            title: "Asian Cuisine Workshop",
            description: "Master the art of sushi, ramen, and stir-fry dishes!",
            menu: ["Sushi Rolls", "Ramen Noodles", "Stir-Fried Vegetables", "Miso Soup"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        mexican: {
            title: "Mexican Fiesta Workshop",
            description: "Learn to make tacos, enchiladas, and fresh salsa!",
            menu: ["Tacos", "Enchiladas", "Fresh Guacamole", "Churros"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        vegan: {
            title: "Vegan Specialties Workshop",
            description: "Create delicious plant-based dishes!",
            menu: ["Vegan Burgers", "Quinoa Salad", "Vegan Brownies", "Smoothie Bowls"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        meat: {
            title: "Meat Mastery Workshop",
            description: "Perfect your grilling and roasting skills!",
            menu: ["BBQ Ribs", "Steak", "Roast Chicken", "Pulled Pork"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        indian: {
            title: "Indian Cuisine Workshop",
            description: "Learn the secrets of curries and naan bread!",
            menu: ["Butter Chicken", "Naan Bread", "Vegetable Curry", "Gulab Jamun"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        }
    };

    // מציאת המידע על הסדנה שנבחרה
    const workshop = workshops[type];

    const detailsContainer = document.getElementById("workshop-details");

    if (workshop) {
        // יצירת תוכן דינאמי
        detailsContainer.innerHTML = `
            <section class="workshop-header">
                <h1>${workshop.title}</h1>
                <p>${workshop.description}</p>
            </section>
            <section class="menu-section">
                <h2>Menu</h2>
                <ul>${workshop.menu.map(item => `<li>${item}</li>`).join("")}</ul>
            </section>
            <section class="registration-section">
                <h2>Register for the Workshop</h2>
                <form id="registration-form">
                    <label for="date">Choose a Date:</label>
                    <input type="date" id="date" required>

                    <label for="time">Choose a Time:</label>
                    <select id="time">${workshop.times.map(time => `<option>${time}</option>`).join("")}</select>

                    <label for="participants">Number of Participants:</label>
                    <input type="number" id="participants" min="1" max="10" required>

                    <button type="submit" class="button">Register</button>
                </form>
            </section>
        `;

        // הוספת מאזין אירועים לטופס
        const form = document.getElementById("registration-form");
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // מונע שליחה רגילה
            const params = new URLSearchParams();

            // איסוף נתוני הטופס
            params.append("date", document.getElementById("date").value);
            params.append("time", document.getElementById("time").value);
            params.append("participants", document.getElementById("participants").value);
            params.append("workshop", workshop.title);

            // מעבר לעמוד הסיכום
            window.location.href = `summary.html?${params.toString()}`;
        });
    } else {
        detailsContainer.innerHTML = `<h1>Workshop not found</h1>`;
    }
});

>>>>>>> c242babb6103c8fb6a52007c4d27a8ffd028f1f0
