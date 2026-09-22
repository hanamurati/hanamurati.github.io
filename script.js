// Automatically updates the copyright year

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Smoothly reveals sections as you scroll

const sections = document.querySelectorAll(".section");

const observerOptions = {
    threshold: 0.08
};

const sectionObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    observerOptions
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});
