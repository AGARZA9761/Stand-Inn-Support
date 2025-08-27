ait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestForm");
  const messageBox = document.getElementById("messageBox");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Grab all form values
    const name = form.elements["name"].value.trim();
    const service = form.elements["service"].value;
    const customRequest = form.elements["customRequest"]?.value.trim();
    const preferredTime = form.elements["preferredTime"]?.value.trim();
    const urgency = form.elements["urgency"]?.value;
    const contact = form.elements["contact"].value.trim();

    // Validate required fields
    if (!name || !contact || (!service && !customRequest)) {
      messageBox.textContent =
        "Please fill out your name, contact info, and either select or describe a service.";
      messageBox.style.color = "red";
      return;
    }

    // Use custom request if no dropdown selected
    const requestSummary = service ? service : customRequest;

    // Build confirmation message
    messageBox.textContent = `Thanks, ${name}! We'll reach out about your "${requestSummary}" request (${urgency || "no urgency specified"}) around ${preferredTime || "your preferred time"}.`;
    messageBox.style.color = "green";

    // Show confirmation section
    document.getElementById("confirmation").style.display = "block";

    // Clear the form
    form.reset();
  });
});

