document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);

    const workshop = params.get("workshop") || "No workshop selected";
    const date = params.get("date") || "No date selected";
    const time = params.get("time") || "No time selected";
    const participants = params.get("participants") || "No participants specified";

    const summarySection = document.getElementById("summary-details");
    summarySection.innerHTML = `
        <p><strong>Workshop:</strong> ${workshop}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Number of Participants:</strong> ${participants}</p>
    `;
});
