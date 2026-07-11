// js/gallery.js

// 1. Fetch the data from our local JSON "database"
export async function loadClassRoster() {
    try {
        const response = await fetch('./students.json');
        if (!response.ok) throw new Error("Failed to fetch student data.");

        const students = await response.json();
        renderRoster(students);
    } catch (error) {
        console.error("Architectural Error:", error);
        document.getElementById('memoryGrid').innerHTML = `<p class="error">Failed to initialize matrix.</p>`;
    }
}

// 2. Generate clean, semantic HTML cards dynamically
function renderRoster(students) {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = ''; // Clear out any loading placeholders

    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';

        // Map out the skills array into little visual tags
        const skillsTags = student.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

        card.innerHTML = `
            <div class="card-inner">
                <div class="profile-header">
                    <div class="avatar-placeholder"><i class="fas fa-user-astronaut"></i></div>
                    <div>
                        <h3>${student.name}</h3>
                        <span class="student-role">${student.role}</span>
                    </div>
                </div>
                <p class="student-bio">"${student.bio}"</p>
                <div class="specialty-zone">
                    <strong>Specialty:</strong> ${student.specialty}
                </div>
                <div class="skills-grid">
                    ${skillsTags}
                </div>
                <div class="project-badge">
                    <i class="fas fa-project-diagram"></i> Core Project: ${student.featuredProject}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}