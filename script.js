// ============================================================
// P.A. Akinboade — Portfolio interactions
// Navbar · mobile menu · active section · project filter
// · project/cert image rendering · modals
// ============================================================

// ---------- Data ----------

const projects = [
    {
        id: 1, category: "web", title: "Company Website — Cradle Techsoft",
        subtitle: "Official website for Cradle Techsoft Solutions Limited",
        description: "Designed, built and launched the corporate website for Cradle Techsoft Solutions Limited — a responsive, performance-focused site showcasing services, portfolio and contact channels. Live in production.",
        technologies: ["React", "JavaScript", "Responsive Design"],
        image: "Project images.png",
        liveLink: "https://cradletechs.com/",
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 2, category: "web", title: "3Trive Castles Website",
        subtitle: "Official company webpage",
        description: "Built the official company website for 3Trive Castles Ltd with clean navigation, service showcases and a fully responsive layout that holds up across every device.",
        technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
        image: "Project images 2.png",
        liveLink: "https://akinboade2000.github.io/3Trive-Castles-Ltd/",
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 3, category: "web", title: "Restaurant Cash Flow Analyzer",
        subtitle: "Web application for restaurant financial analysis",
        description: "A full-stack tool (JavaScript + Flask/Python) where restaurant owners upload financial records and get automated analysis back — anomaly detection, expense breakdowns and visual reports on revenue, costs and profit margins.",
        technologies: ["JavaScript", "Flask", "Python"],
        image: "Project 5.png",
        liveLink: null,
        githubLink: "https://github.com/Akinboade2000/Restaurant-Cash-Flow-Analyzer"
    },
    {
        id: 4, category: "web", title: "Zoe Restaurant",
        subtitle: "Restaurant frontend design",
        description: "A polished restaurant front-end with menu display, intuitive navigation and a reservation flow — built with modern CSS and JavaScript for a seamless experience.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "Project images 4.png",
        liveLink: "https://akinboade2000.github.io/Restaurant-site/",
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 5, category: "web", title: "Tip Calculator",
        subtitle: "Interactive tip calculation tool",
        description: "A snappy, user-friendly calculator for tips, bill splitting and real-time totals, with customizable percentages for any group size.",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "Project images 3.png",
        liveLink: "https://akinboade2000.github.io/Complete-Tip-Calculator/",
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 6, category: "data", title: "HR Analytics Dashboard",
        subtitle: "Comprehensive HR Analytics with Power BI",
        description: "A Power BI dashboard leveraging Power Query transformations and DAX measures to surface employee distribution by gender, tenure, job level and retention analysis — built to support data-driven HR decisions.",
        technologies: ["Power BI", "DAX", "Power Query"],
        image: "Project 6.png",
        liveLink: null,
        githubLink: "https://github.com/Akinboade2000/HR-Dashboard-"
    },
    {
        id: 7, category: "data", title: "Sales Analysis Dashboard",
        subtitle: "Interactive Sales Analytics with Tableau",
        description: "A Tableau dashboard tracking total revenue, expenses, net income and profit margins across countries, with geographic visualization of sales and interactive filters for detailed exploration.",
        technologies: ["Tableau", "Data Visualization", "Sales Analytics"],
        image: "Project 7.png",
        liveLink: "https://public.tableau.com/app/profile/precious.akinkunmi.akinboade/viz/SalesAnalysis_16977184201570/Dashboard1",
        githubLink: null
    },
    {
        id: 8, category: "data", title: "World Cup Data Analysis Dashboard",
        subtitle: "Comprehensive World Cup Statistics with Tableau",
        description: "An interactive Tableau dashboard analyzing World Cup history — game statistics by stadium and city, team performance and opponent goals, with rich filtering to explore tournaments in depth.",
        technologies: ["Tableau", "Data Analytics", "Sports Analytics"],
        image: "Project 8.png",
        liveLink: "https://public.tableau.com/app/profile/precious.akinkunmi.akinboade/viz/WorldCupDataAnalysisDashboard/WORLDCUPDASHBOARD",
        githubLink: null
    }
];

const certifications = [
    { id: 1, title: "HP LIFE: Data Science & Analytics", year: "2024",
      description: "Foundational data analysis skills — interpreting datasets, extracting actionable insights and translating raw data into clear, strategic recommendations.",
      image: "hp_data science.png" },
    { id: 2, title: "HP LIFE: Agile Project Management", year: "2024",
      description: "Core Agile methodologies (Scrum, Kanban) for iterative delivery — managing dynamic backlogs, facilitating sprints and adapting to changing stakeholder requirements.",
      image: "hp_agile.png" },
    { id: 3, title: "ALX: Virtual Assistant Certification", year: "2024",
      description: "Remote administrative support, digital communication management, scheduling and client coordination — with strong time management and productivity-tool proficiency.",
      image: "Virtual assistant.png" },
    { id: 4, title: "CISCO: Data Analytics Essentials", year: "2023",
      description: "The full data analysis process — collection, cleaning, analysis and visualization with industry-standard tools, plus statistical concepts and dashboard communication.",
      image: "cisco_data analytics.png" },
    { id: 5, title: "CISCO: Introduction to Data Science", year: "2023",
      description: "The data science lifecycle end to end — data exploration, model development and machine learning basics with hands-on exposure to essential tools and languages.",
      image: "cisco_data science.png" },
    { id: 6, title: "Future Africa Academy: Junior Frontend Web Developer", year: "2022",
      description: "Dynamic, responsive web applications with HTML, CSS, JavaScript and React — translating design mockups and wireframes into functional, cross-browser compatible interfaces.",
      image: "Future Africa Academy.png" },
    { id: 7, title: "IBM SkillsBuild: Project Management Fundamentals", year: "2026",
      description: "Foundational project management principles, including planning, execution, and delivery. Gained insights into managing project lifecycles, coordinating teams, and applying best practices to achieve project goals effectively.",
      image: "Project Management.png" }
];

// ---------- Navbar scroll state ----------

const navbar = document.getElementById("navbar");

function updateNavbar() {
    if (window.scrollY > 24) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
}
window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

// ---------- Mobile menu ----------

const navToggle = document.getElementById("navToggle");
const navToggleIcon = document.getElementById("navToggleIcon");
const mobileMenu = document.getElementById("mobileMenu");

if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
        const open = mobileMenu.hidden;
        mobileMenu.hidden = !open;
        navToggle.setAttribute("aria-expanded", String(open));
        if (navToggleIcon) navToggleIcon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.hidden = true;
            navToggle.setAttribute("aria-expanded", "false");
            if (navToggleIcon) navToggleIcon.className = "fa-solid fa-bars";
        });
    });
}

// ---------- Active section highlight ----------

const sectionIds = ["home", "about", "projects", "certifications", "contact"];
const navAnchors = document.querySelectorAll("#navLinks a[data-section]");

if (navAnchors.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navAnchors.forEach((anchor) => {
                        anchor.classList.toggle("active", anchor.dataset.section === entry.target.id);
                    });
                }
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

// ---------- Render projects (image cards) ----------

const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
let activeFilter = "all";

function projectCardHTML(p) {
    const tagLabel = p.category === "data" ? "data analytics" : "web development";
    return `
        <article class="project-card" data-category="${p.category}" data-project="${p.id}">
            <div class="project-image">
                <img src="${p.image}" alt="${p.title}" loading="lazy"
                     onerror="this.parentElement.classList.add('img-missing'); this.style.display='none';">
                <span class="project-category">${tagLabel}</span>
            </div>
            <div class="project-body">
                <h3>${p.title}</h3>
                <p>${p.subtitle}</p>
                <div class="project-tags">
                    ${p.technologies.map((t) => `<span>${t}</span>`).join("")}
                </div>
                <div class="project-links">
                    ${p.liveLink ? `<a href="${p.liveLink}" target="_blank" rel="noreferrer" class="btn btn-small btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>` : ""}
                    ${p.githubLink ? `<a href="${p.githubLink}" target="_blank" rel="noreferrer" class="btn btn-small btn-outline"><i class="fa-brands fa-github"></i> Code</a>` : ""}
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    if (!projectsGrid) return;
    const visible = activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter);
    projectsGrid.innerHTML = visible.map(projectCardHTML).join("");
    bindProjectCardClicks();
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter;
        renderProjects();
    });
});

// ---------- Modal helpers ----------

const projectModal = document.getElementById("projectModal");
const certModal = document.getElementById("certModal");

function openModal(modal) {
    if (!modal) return;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}
function closeModals() {
    [projectModal, certModal].forEach((m) => m && m.classList.remove("show"));
    document.body.style.overflow = "";
}

document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", closeModals);
});
window.addEventListener("click", (e) => {
    if (e.target === projectModal || e.target === certModal) closeModals();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
});

// ---------- Project card → modal ----------

function bindProjectCardClicks() {
    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", (e) => {
            // Don't hijack the Live / Code buttons
            if (e.target.closest("a")) return;
            const id = Number(card.dataset.project);
            const project = projects.find((p) => p.id === id);
            if (!project || !projectModal) return;

            const body = projectModal.querySelector(".modal-body");
            body.innerHTML = `
                <h2>${project.title}</h2>
                <p class="subtitle">${project.subtitle}</p>
                <img class="modal-image" src="${project.image}" alt="${project.title}">
                <p>${project.description}</p>
                <h3>Technologies Used</h3>
                <div class="project-tags">
                    ${project.technologies.map((t) => `<span>${t}</span>`).join("")}
                </div>
                <div class="project-links">
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noreferrer" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Live</a>` : ""}
                    ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noreferrer" class="btn btn-outline"><i class="fa-brands fa-github"></i> View on GitHub</a>` : ""}
                </div>
            `;
            openModal(projectModal);
        });
    });
}

// ---------- Render certifications (accordion + image) ----------

const certsGrid = document.getElementById("certsGrid");

function certCardHTML(c) {
    return `
        <div class="cert-card" data-cert="${c.id}">
            <button type="button" class="cert-toggle" aria-expanded="false">
                <span class="detail-icon"><i class="fa-solid fa-award"></i></span>
                <span class="cert-info">
                    <span class="cert-title">${c.title}</span>
                    <span class="cert-year">${c.year}</span>
                </span>
                <i class="fa-solid fa-chevron-down cert-chevron"></i>
            </button>
            <div class="cert-body" hidden>
                <p>${c.description}</p>
                <div class="cert-image">
                    <img src="${c.image}" alt="${c.title} certificate" loading="lazy">
                </div>
            </div>
        </div>
    `;
}

function renderCerts() {
    if (!certsGrid) return;
    certsGrid.innerHTML = certifications.map(certCardHTML).join("");
    bindCertAccordion();
}

function bindCertAccordion() {
    document.querySelectorAll(".cert-toggle").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const card = toggle.closest(".cert-card");
            const body = card.querySelector(".cert-body");
            const open = body.hidden;

            document.querySelectorAll(".cert-card.open").forEach((other) => {
                if (other !== card) {
                    other.classList.remove("open");
                    other.querySelector(".cert-body").hidden = true;
                    other.querySelector(".cert-toggle").setAttribute("aria-expanded", "false");
                }
            });

            card.classList.toggle("open", open);
            body.hidden = !open;
            toggle.setAttribute("aria-expanded", String(open));
        });
    });
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderCerts();
});