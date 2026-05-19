const detailsList = document.querySelectorAll(".questions details");

detailsList.forEach((detail) => {
    const summary = detail.querySelector("summary");
    summary.setAttribute("aria-expanded", "false");

    detail.addEventListener("toggle", () => {
        summary.setAttribute("aria-expanded", detail.open ? "true" : "false");

        if (detail.open) {
            detailsList.forEach((other) => {
                if (other !== detail) {
                    other.removeAttribute("open");
                    other.querySelector("summary").setAttribute("aria-expanded", "false");
                } 
            });
        }
    });
});
