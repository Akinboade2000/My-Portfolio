// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const projectCards = document.querySelectorAll('.project-card');
const certCards = document.querySelectorAll('.cert-card');
const projectModal = document.getElementById('projectModal');
const certModal = document.getElementById('certModal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const contactForm = document.getElementById('contactForm');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Project Data
const projects = [
    {
        id: 1,
        title: "Company Website",
        subtitle: "Official website for Cradle Techsoft Solutions Limited",
        description: "Designed, developed, and launched the company's official website, ensuring a responsive, user-friendly, and professional online presence. The website showcases company services, portfolio, and contact information with modern design principles and optimal performance.",
        technologies: ["JavaScript", "Web Development", "Responsive Design"],
        image: "Project images.png",
        liveLink: "https://cradletechs.com/",
    },
    {
        id: 2,
        title: "3Trive Website",
        subtitle: "Official company webpage",
        description: "Developed a comprehensive website for 3Trive, a company focused on empowering entrepreneurs. The site features detailed information about the company's mission, services, and resources, designed to engage visitors and provide a seamless user experience across devices.",
        technologies: ["Web Development", "JavaScript", "Responsive Design"],
        image: "Project images 2.png",
        liveLink: "https://3-trive.com/",
    },
    {
        id: 3,
        title: "Tip Calculator",
        subtitle: "For calculation of tips",
        description: "Built a responsive tip calculator application using HTML, CSS, and JavaScript. The application allows users to calculate tips based on bill amount and service quality.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "Project images 3.png",
        liveLink: "https://akinboade2000.github.io/Complete-Tip-Calculator/",
        githubLink: "https://github.com/Akinboade2000/Complete-Tip-Calculator"
    },
    {
        id: 4,
        title: "Zoe Restaurant",
        subtitle: "Restaurant frontend design",
        description: "Created a personal custom frontend for a restaurant website, focusing on an appealing layout and user experience. The design incorporates modern web technologies to ensure responsiveness and accessibility across various devices.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Frontend"],
        image: "Project images 4.png",
        liveLink: "https://akinboade2000.github.io/Restaurant-site/",
        githubLink: "https://github.com/Akinboade2000/Restaurant-site"
    }
];

// Certification Data
const certifications = [
    {
        id: 1,
        title: "HP LIFE: Data Science & Analytics",
        year: "2024",
        description: "Acquired foundational skills in data analysis, learning to interpret datasets and extract actionable insights to inform business decisions. Explored key data science concepts and tools to translate raw data into clear, strategic recommendations.",
        image: "hp_data science.png"
    },
    {
        id: 2,
        title: "HP LIFE: Agile Project Management",
        year: "2024",
        description: "Mastered core Agile methodologies (Scrum, Kanban) to improve project flexibility, team velocity, and iterative delivery of value. Applied techniques for managing dynamic project backlogs, facilitating sprint cycles, and adapting to changing stakeholder requirements.",
        image: "hp_agile.png"
    },
    {
        id: 3,
        title: "ALX: Virtual Assistant Certification",
        year: "2024",
        description: "Developed proficiency in remote administrative support, including digital communication management, scheduling, and client relationship coordination. Honed skills in time management, professional correspondence, and leveraging productivity tools to execute tasks efficiently in a virtual environment.",
        image: "Virtual assistant.png"
    },
    {
        id: 4,
        title: "CISCO: Data Analytics Essentials",
        year: "2023",
        description: "Built technical competency in the data analysis process, from data collection and cleaning to analysis and visualization using industry-standard tools. Learned to apply statistical concepts and create dashboards to communicate data-driven findings clearly and effectively.",
        image: "cisco_data analytics.png"
    },
    {
        id: 5,
        title: "CISCO: Introduction to Data Science",
        year: "2023",
        description: "Established a comprehensive understanding of the data science lifecycle, including key methodologies for data exploration, model development, and machine learning basics. Gained hands-on exposure to the tools and programming languages essential for solving real-world problems with data.",
        image: "cisco_data science.png"
    },
    {
        id: 6,
        title: "Future Africa Academy: Junior Frontend Web Developer",
        year: "2022",
        description: "Developed dynamic, responsive web applications using core frontend technologies (HTML, CSS, JavaScript) and modern framework (React). Built and deployed interactive user interfaces (UIs) by translating design mockups and wireframes into functional, cross-browser compatible code.",
        image: "Future Africa Academy.png"
    }
];

// Open Project Modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = parseInt(card.getAttribute('data-project'));
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            const modalBody = projectModal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="project-details">
                    <h2>${project.title}</h2>
                    <p class="subtitle">${project.subtitle}</p>
                    <img src="${project.image}" alt="${project.title}">
                    <p>${project.description}</p>
                    
                    <h3>Technologies Used</h3>
                    <div class="project-tags">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    
                    <div class="project-links">
                        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn-primary">View Live Project</a>` : ''}
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn-secondary">View on GitHub</a>` : ''}
                    </div>
                </div>
            `;
            
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Open Certification Modal
certCards.forEach(card => {
    card.addEventListener('click', () => {
        const certId = parseInt(card.getAttribute('data-cert'));
        const certification = certifications.find(c => c.id === certId);
        
        if (certification) {
            const modalBody = certModal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="certificate-view">
                    <img src="${certification.image}" alt="${certification.title} Certificate">
                    <div class="certificate-info">
                        <h3>${certification.title}</h3>
                        <p><strong>Year:</strong> ${certification.year}</p>
                        <p>${certification.description}</p>
                    </div>
                </div>
            `;
            
            certModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close Modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        projectModal.style.display = 'none';
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (e.target === certModal) {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this example, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});
