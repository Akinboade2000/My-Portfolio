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
        technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
        image: "Project images.png",
        category: "web",
        liveLink: "https://example.com",
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 2,
        title: "3Trive Website",
        subtitle: "Official company webpage",
        description: "Developed a responsive company website for 3Trive, focusing on modern design principles and user experience. The website features clean navigation, service showcases, and optimized performance across all devices.",
        technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
        image: "Project images 2.png",
        category: "web",
        liveLink: "https://example.com/3trive",
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 3,
        title: "Restaurant Cash Flow Analyzer",
        subtitle: "Web application for restaurant financial analysis",
        description: "A comprehensive restaurant cash flow analysis system built with JavaScript and Flask. Users can upload their financial data, and the system automatically analyzes it, identifies anomalies, and provides actionable insights. Features include automated data processing, anomaly detection, and visual reports of revenue, expenses, and profit margins.",
        technologies: ["JavaScript", "Flask", "Python", "Data Analysis"],
        image: "Project 5.png",
        category: "web",
        liveLink: null,
        githubLink: "https://github.com/Akinboade2000/Restaurant-Cash-Flow-Analyzer"
    },
    {
        id: 4,
        title: "Zoe Restaurant",
        subtitle: "Restaurant frontend design",
        description: "A beautifully designed restaurant frontend interface with intuitive navigation, menu display, and reservation system. Built with modern CSS and JavaScript for a seamless user experience.",
        technologies: ["HTML", "CSS", "JavaScript", "Frontend"],
        image: "Project images 4.png",
        category: "web",
        liveLink: null,
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 5,
        title: "Tip Calculator",
        subtitle: "Interactive tip calculation tool",
        description: "A user-friendly tip calculator that helps users calculate tips, split bills, and manage payments. Features include customizable tip percentages, bill splitting, and real-time calculations.",
        technologies: ["JavaScript", "HTML", "CSS", "Web App"],
        image: "Project images 3.png",
        category: "web",
        liveLink: null,
        githubLink: "https://github.com/Akinboade2000"
    },
    {
        id: 6,
        title: "HR Analytics Dashboard",
        subtitle: "Comprehensive HR Analytics with Power BI",
        description: "A comprehensive HR Analytics Dashboard built with Power BI, leveraging Power Query for data transformation and DAX for advanced calculations and insights. This dashboard provides clear visualizations of key HR metrics including employee distribution by gender, service years, job levels, distance status, and retention analysis to support data-driven decision-making.",
        technologies: ["Power BI", "DAX", "Power Query", "Data Visualization"],
        image: "Project 6.png",
        category: "data",
        liveLink: null,
        githubLink: "https://github.com/Akinboade2000/HR-Dashboard-"
    },
    {
        id: 7,
        title: "Sales Analysis Dashboard",
        subtitle: "Interactive Sales Analytics with Tableau",
        description: "A comprehensive sales analysis dashboard built with Tableau, providing insights into total revenue, expenses, net income, and profit margins across different countries. Features include geographic visualization of sales data, cost analysis, and profit tracking with interactive filters for detailed exploration.",
        technologies: ["Tableau", "Data Visualization", "Sales Analytics"],
        image: "Project 7.png",
        category: "data",
        liveLink: "https://public.tableau.com/app/profile/precious.akinkunmi.akinboade/viz/SalesAnalysis_16977184201570/Dashboard1",
        githubLink: null
    },
    {
        id: 8,
        title: "World Cup Data Analysis Dashboard",
        subtitle: "Comprehensive World Cup Statistics with Tableau",
        description: "An interactive Tableau dashboard analyzing World Cup data across multiple tournaments. Features include game statistics by stadium and city, team performance analysis, opponent goals visualization, and comprehensive filtering options to explore historical World Cup data in-depth.",
        technologies: ["Tableau", "Data Analytics", "Sports Analytics"],
        image: "Project 8.png",
        category: "data",
        liveLink: "https://public.tableau.com/app/profile/precious.akinkunmi.akinboade/viz/WorldCupDataAnalysisDashboard/WORLDCUPDASHBOARD",
        githubLink: null
    }
];

// Certification Data
const certifications = [
    {
        id: 1,
        title: "HP LIFE: Data Science & Analytics",
        year: "2024",
        description: "Acquired foundational skills in data analysis, learning to interpret datasets and extract actionable insights to inform business decisions. Explored key data science concepts and tools to translate raw data into clear, strategic recommendations.",
        image: "certificates/hp-life-data-science.jpg"
    },
    {
        id: 2,
        title: "HP LIFE: Agile Project Management",
        year: "2024",
        description: "Mastered core Agile methodologies (Scrum, Kanban) to improve project flexibility, team velocity, and iterative delivery of value. Applied techniques for managing dynamic project backlogs, facilitating sprint cycles, and adapting to changing stakeholder requirements.",
        image: "certificates/hp-life-agile.jpg"
    },
    {
        id: 3,
        title: "ALX: Virtual Assistant Certification",
        year: "2024",
        description: "Developed proficiency in remote administrative support, including digital communication management, scheduling, and client relationship coordination. Honed skills in time management, professional correspondence, and leveraging productivity tools to execute tasks efficiently in a virtual environment.",
        image: "certificates/alx-va.jpg"
    },
    {
        id: 4,
        title: "CISCO: Data Analytics Essentials",
        year: "2023",
        description: "Built technical competency in the data analysis process, from data collection and cleaning to analysis and visualization using industry-standard tools. Learned to apply statistical concepts and create dashboards to communicate data-driven findings clearly and effectively.",
        image: "certificates/cisco-data-analytics.jpg"
    },
    {
        id: 5,
        title: "CISCO: Introduction to Data Science",
        year: "2023",
        description: "Established a comprehensive understanding of the data science lifecycle, including key methodologies for data exploration, model development, and machine learning basics. Gained hands-on exposure to the tools and programming languages essential for solving real-world problems with data.",
        image: "certificates/cisco-data-science.jpg"
    },
    {
        id: 6,
        title: "Future Africa Academy: Junior Frontend Web Developer",
        year: "2022",
        description: "Developed dynamic, responsive web applications using core frontend technologies (HTML, CSS, JavaScript) and modern framework (React). Built and deployed interactive user interfaces (UIs) by translating design mockups and wireframes into functional, cross-browser compatible code.",
        image: "certificates/future-africa-frontend.jpg"
    }
];

// Function to display projects based on category
function displayProjects(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-project="${project.id}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.subtitle}</p>
                <div class="project-tags">
                    ${project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-attach event listeners to new project cards
    attachProjectCardListeners();
}

// Function to attach click listeners to project cards
function attachProjectCardListeners() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.getAttribute('data-project'));
            const project = projects.find(p => p.id === projectId);
            
            if (project) {
                const modalBody = projectModal.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <div class="project-details">
                        <h2>${project.title}</h2>
                        <p class="subtitle" style="color: var(--secondary-color); margin-bottom: 15px;">${project.subtitle}</p>
                        <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 400px; object-fit: contain; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin-bottom: 20px;">${project.description}</p>
                        
                        <h3 style="color: var(--primary-color); margin-bottom: 10px;">Technologies Used</h3>
                        <div class="project-tags" style="margin-bottom: 25px;">
                            ${project.technologies.map(tech => `<span style="background-color: var(--light-color); color: var(--primary-color); padding: 5px 10px; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`).join('')}
                        </div>
                        
                        <div class="project-links" style="display: flex; gap: 15px;">
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
}

// Add filter buttons to Projects section
function addFilterButtons() {
    const projectsSection = document.getElementById('projects');
    const container = projectsSection.querySelector('.container');
    const sectionTitle = container.querySelector('.section-title');
    const sectionSubtitle = container.querySelector('.section-subtitle');
    
    // Create filter buttons container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-buttons';
    filterContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-bottom: 30px;
    `;
    
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All Projects</button>
        <button class="filter-btn" data-filter="web">Web Development</button>
        <button class="filter-btn" data-filter="data">Data Analytics</button>
    `;
    
    // Insert filter buttons after subtitle
    sectionSubtitle.insertAdjacentElement('afterend', filterContainer);
    
    // Style filter buttons
    const style = document.createElement('style');
    style.textContent = `
        .filter-btn {
            padding: 10px 25px;
            border: 2px solid var(--primary-color);
            background: transparent;
            color: var(--primary-color);
            border-radius: 30px;
            cursor: pointer;
            font-weight: 600;
            transition: var(--transition);
        }
        
        .filter-btn:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-2px);
        }
        
        .filter-btn.active {
            background: var(--primary-color);
            color: white;
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners to filter buttons
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            displayProjects(filter);
        });
    });
}

// Open Certification Modal
certCards.forEach(card => {
    card.addEventListener('click', () => {
        const certId = parseInt(card.getAttribute('data-cert'));
        const certification = certifications.find(c => c.id === certId);
        
        if (certification) {
            const modalBody = certModal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="certificate-view">
                    <img src="${certification.image}" alt="${certification.title} Certificate" style="width: 100%; max-height: 500px; object-fit: contain; border: 1px solid #ddd; border-radius: 8px;">
                    <div class="certificate-info" style="margin-top: 20px;">
                        <h3 style="color: var(--primary-color); margin-bottom: 10px;">${certification.title}</h3>
                        <p><strong>Year:</strong> ${certification.year}</p>
                        <p style="margin-top: 10px;">${certification.description}</p>
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

// Contact Form Submission with Netlify
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            
            // For Netlify forms, we just need to submit the form
            // The page will handle the redirect
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Thank you for your message! I\'ll get back to you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            }).catch(error => {
                console.error('Form submission error:', error);
                alert('Sorry, there was an error sending your message. Please try again later.');
            }).finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Display all projects initially
    displayProjects('all');
    
    // Add filter buttons
    addFilterButtons();
    
    // Attach certification card listeners
    certCards.forEach(card => {
        card.addEventListener('click', () => {
            const certId = parseInt(card.getAttribute('data-cert'));
            const certification = certifications.find(c => c.id === certId);
            
            if (certification) {
                const modalBody = certModal.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <div class="certificate-view">
                        <img src="${certification.image}" alt="${certification.title} Certificate" style="width: 100%; max-height: 500px; object-fit: contain; border: 1px solid #ddd; border-radius: 8px;">
                        <div class="certificate-info" style="margin-top: 20px;">
                            <h3 style="color: var(--primary-color); margin-bottom: 10px;">${certification.title}</h3>
                            <p><strong>Year:</strong> ${certification.year}</p>
                            <p style="margin-top: 10px;">${certification.description}</p>
                        </div>
                    </div>
                `;
                
                certModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
});
