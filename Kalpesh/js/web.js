const links = document.querySelectorAll(".nav-links");
const dropdown = document.querySelector(".drop-div");

links.forEach((link) => {
    link.addEventListener("mouseenter", () => link.classList.add("hover-animation"));
    link.addEventListener("mouseleave", () => link.classList.remove("hover-animation"));
});

if (links.length >= 5 && dropdown) {
    links[2].addEventListener("mouseenter", () => {
        dropdown.classList.remove("d-none");
    });

    links[2].addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!dropdown.matches(":hover")) {
                dropdown.classList.add("d-none");
            }
        }, 200); // Delay to allow hover over dropdown
    });

    dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.remove("d-none");
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.add("d-none");
    });
}
