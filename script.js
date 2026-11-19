
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    themeBtn.setAttribute("aria-pressed", String(isDark));
});


const showMoreBtn = document.getElementById("showMoreBtn");
const moreText = document.getElementById("moreText");
showMoreBtn.addEventListener("click", function () {
    moreText.hidden = !moreText.hidden;
    showMoreBtn.textContent = moreText.hidden ? "Show More" : "Show Less";
    showMoreBtn.setAttribute("aria-expanded", String(!moreText.hidden));
});


const projects = [
    {
        title: "One KEY",
        description: "An awareness-raising project aimed at enhancing digital security and protecting user accounts, focusing on the importance of avoiding password reuse, using complex passphrases, and refraining from insecurely noting down sensitive information.",
        category: "Web",
        technologies: ["Canva"],
        link: "https://canva.link/718a1zfav509xac"
    },
    {
        title: "Interactive CV - JavaScript DOM",
        description: "JavaScript programming for theme switching, expandable content, dynamic project cards, category filtering, and printing.",
        category: "Programming",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

const projectsContainer = document.getElementById("projectsContainer");
let selectedCategory = "All";

function renderProjects(category = "All") {
    projectsContainer.innerHTML = "";
    projects.forEach(function (project) {
        if (category !== "All" && project.category !== category) return;

        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;
        const description = document.createElement("p");
        description.textContent = project.description;
        const projectCategory = document.createElement("p");
        projectCategory.textContent = "Category: " + project.category;
        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(projectCategory);
        card.appendChild(technologies);

        if (project.link) {
            const link = document.createElement("a");
            link.href = project.link;
            link.textContent = "View Project";
            card.appendChild(link);
        }
        projectsContainer.appendChild(card);
    });
}
renderProjects();


const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;
        filterButtons.forEach(function (item) {
            item.setAttribute("aria-pressed", String(item === button));
        });
        renderProjects(selectedCategory);
    });
});


const printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", function () {
    window.print();
});

window.addEventListener("beforeprint", function () {
    renderProjects("All");
});
window.addEventListener("afterprint", function () {
    renderProjects(selectedCategory);
});
