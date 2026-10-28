// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Contact form

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thank you ${name}! Your message has been received.`;

    form.reset();
});


// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();
    // PROJECT FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        // Active button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Show / hide projects
        projects.forEach(project => {

            const category = project.dataset.category;

            if (filter === "all" || category === filter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});


// IMAGE PREVIEW

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

const viewButtons = document.querySelectorAll(".view-image");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const image = button.dataset.image;

        modalImage.src = image;

        modal.classList.add("show");

    });

});


// CLOSE MODAL

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});


// CLICK OUTSIDE IMAGE

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});