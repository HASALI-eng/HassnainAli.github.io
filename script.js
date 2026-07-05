const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        tab.classList.add("active");

        const target = document.getElementById(
            tab.getAttribute("data-tab")
        );

        target.classList.add("active");
    });
});
