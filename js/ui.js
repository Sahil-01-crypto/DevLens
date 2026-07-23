function showToast(options) {

    // Find existing container
    let toastContainer = document.querySelector(".toast-container");

    // Create it only once
    if (!toastContainer) {

        toastContainer = document.createElement("div");
        toastContainer.classList.add("toast-container");

        document.body.appendChild(toastContainer);
    }

    // Create one toast
    const toast = document.createElement("div");
    toast.classList.add("toast", options.type);

    // Heading
    const heading = document.createElement("h3");
    heading.textContent = options.message;

    // Paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = options.description;

    // Build toast
    toast.appendChild(heading);
    toast.appendChild(paragraph);

    // Add toast to container
    toastContainer.appendChild(toast);

    // Auto remove
    setTimeout(() => {

    toast.classList.add("fade-out");

    setTimeout(() => {

        toast.remove();

    },350);

},3000);
}