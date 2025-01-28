document.addEventListener("DOMContentLoaded", function () {
    // Get the workshop type from the URL
    const pathSegments = window.location.pathname.split("/");
    const type = pathSegments[pathSegments.length - 1];

    console.log("📢 Workshop Type:", type);

    // Workshop details
    const workshops = {
        italian: {
            title: "Italian Cooking Workshop",
            description: "Master the art of fresh pasta, creamy risotto, and classic Margherita pizza.",
            menu: ["Homemade Pasta", "Risotto alla Milanese", "Classic Margherita Pizza", "Tiramisu"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        asian: {
            title: "Asian Cuisine Workshop",
            description: "Roll sushi, cook rich ramen, and stir-fry like a pro!",
            menu: ["Sushi Rolls", "Ramen Noodles", "Stir-Fried Vegetables", "Miso Soup"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        mexican: {
            title: "Mexican Fiesta Workshop",
            description: "Spice things up with tacos, enchiladas, and fresh guacamole!",
            menu: ["Tacos", "Enchiladas", "Fresh Guacamole", "Churros"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        vegan: {
            title: "Vegan Specialties Workshop",
            description: "Cook delicious plant-based burgers, salads, and desserts.",
            menu: ["Vegan Burgers", "Quinoa Salad", "Vegan Brownies", "Smoothie Bowls"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        meat: {
            title: "Meat Mastery Workshop",
            description: "Perfect your grilling skills with BBQ ribs, steak, and roast chicken.",
            menu: ["BBQ Ribs", "Steak", "Roast Chicken", "Pulled Pork"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        },
        indian: {
            title: "Indian Cuisine Workshop",
            description: "Discover the flavors of curry, naan, and sweet Gulab Jamun.",
            menu: ["Butter Chicken", "Naan Bread", "Vegetable Curry", "Gulab Jamun"],
            times: ["7:30 PM", "8:30 PM", "9:30 PM"]
        }
    };

    // Find the selected workshop
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

        // **NEW: Restrict date selection to today and two months ahead**
        const dateInput = document.getElementById("date");
        if (dateInput) {
            const today = new Date();
            const minDate = today.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
            dateInput.setAttribute("min", minDate);

            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 2); // Add 2 months
            const maxDateStr = maxDate.toISOString().split("T")[0];
            dateInput.setAttribute("max", maxDateStr);
        }

        // **NEW: Handle form submission and redirect to summary**
        const form = document.getElementById("registration-form");
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            // Get form values
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const participants = document.getElementById("participants").value;

            // Store data in URL parameters for summary page
            const params = new URLSearchParams();
            params.append("workshop", workshop.title);
            params.append("date", date);
            params.append("time", time);
            params.append("participants", participants);

            // Redirect to summary page
            window.location.href = `/summary/?${params.toString()}`;
        });

    } else {
        detailsContainer.innerHTML = `<h1>Workshop not found</h1>`;
    }
});
