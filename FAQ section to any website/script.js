document.addEventListener("DOMContentLoaded", function () {
    let accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            // Close all open accordions except the clicked one
            accordions.forEach((item) => {
                if (item !== accordion) {
                    item.classList.remove("active");
                }
            });

            // Toggle the clicked accordion
            accordion.classList.toggle("active");
        });
    });
});
