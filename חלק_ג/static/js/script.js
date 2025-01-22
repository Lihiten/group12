
// ולידציה בסיסית לטופס צור קשר
document.addEventListener("DOMContentLoaded", function () {
    const validateForm = (form) => {
        const email = form.querySelector("#email").value;
        const phone = form.querySelector("#phone").value;
        const age = form.querySelector("#age")?.value || "";

        let hasError = false;

        // בדיקת אימייל
        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            hasError = true;
        }

        // בדיקת מספר טלפון
        if (!/^0\d{9}$/.test(phone)) {
            alert("The phone number must be 10 digits long and start with 0.");
            hasError = true;
        }

        // בדיקת גיל
        if (age && (isNaN(age) || age <= 0)) {
            alert("Please enter a valid age.");
            hasError = true;
        }

        return hasError;
    };

    // חיבור מאזין לטופס signup
    const signupForm = document.querySelector(".signup-form form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            if (validateForm(signupForm)) {
                event.preventDefault(); // עצירת שליחה אם יש שגיאות
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        // בדיקת סיסמה
        const passwordInput = document.getElementById("password");
        passwordInput.addEventListener("input", function (event) {
            if (passwordInput.value.length < 8) {
                event.target.setCustomValidity("The password must be at least 8 characters long.");
            } else {
                event.target.setCustomValidity("");
            }
        });

        // בדיקת גיל
        const ageInput = document.getElementById("age");
        ageInput.addEventListener("input", function (event) {
            if (ageInput.value < 18) {
                event.target.setCustomValidity("You must be at least 18 years old to sign up.");
            } else {
                event.target.setCustomValidity("");
            }
        });

        // טיפול בטעינת הטופס
        form.addEventListener("submit", function (event) {
            // בדיקה סופית לפני שליחת הטופס
            if (passwordInput.value.length < 8) {
                event.preventDefault();
                alert("Password must be at least 8 characters long.");
            }

            if (ageInput.value < 18) {
                event.preventDefault();
                alert("You must be at least 18 years old to sign up.");
            }
        });
    }
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

        // הגבלת תאריכים
        const dateInput = document.getElementById("date");
        if (dateInput) {
            const today = new Date();
            const minDate = today.toISOString().split("T")[0]; // תאריך מינימלי
            dateInput.setAttribute("min", minDate);

            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 2); // חודשיים קדימה
            const maxDateStr = maxDate.toISOString().split("T")[0]; // תאריך מקסימלי
            dateInput.setAttribute("max", maxDateStr);
        }

        // מאזין לטופס
        const form = document.getElementById("registration-form");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                const params = new URLSearchParams();

                params.append("date", document.getElementById("date").value);
                params.append("time", document.getElementById("time").value);
                params.append("participants", document.getElementById("participants").value);
                params.append("workshop", workshop.title);

                window.location.href = `summary.html?${params.toString()}`;
            });
        }
    } else {
        detailsContainer.innerHTML = `<h1>Workshop not found</h1>`;
    }
});

