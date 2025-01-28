document.addEventListener("DOMContentLoaded", function () {
    // קבלת שם הסדנה מהנתיב (URL)
    const pathSegments = window.location.pathname.split("/");
    const type = pathSegments[pathSegments.length - 1]; // מקבל את הערך האחרון ב-URL

    console.log("📢 Workshop Type:", type); // הדפסה לבדיקת הערך

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
        }
        // הוסיפי כאן את שאר הסדנאות
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
    } else {
        detailsContainer.innerHTML = `<h1>Workshop not found</h1>`;
    }
});
