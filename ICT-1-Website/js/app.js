import { verifyCredentials, invalidateSession } from './auth.js';
import { initMatrixRain } from './matrix.js';

document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();

    // UI Core Element Selections
    const themeToggle = document.getElementById('themeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const loginCard = document.getElementById('loginCard');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const authStatus = document.getElementById('authStatus');
    const authPanel = document.getElementById('authPanel');
    const galleryWrapper = document.getElementById('galleryWrapper');

    // Header & Directory Elements
    const rosterToggle = document.getElementById('rosterToggle');
    const rosterZone = document.getElementById('rosterZone');
    const backToMainBtn = document.getElementById('backToMainBtn');
    const rosterGrid = document.getElementById('rosterGrid');
    const terminalTitle = document.getElementById('terminalTitle');
    const nodeBadge = document.getElementById('nodeBadge');

    /*SCALABLE ROSTER DATABASE ARRAY*/
    const classmates = [
        {
            name: "Niko Sean Pascual(Creator)",
            hobby: "Programming",
            favColor: "Blue",
            photo: "assets/classmates/niko.jpg"
        },
        {
            name: "John Prats Apat",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Apat.jpg"
        },
        /*NOT FINISHED*/
        {
            name: "Lowell Kyle Aquino",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Aquino.jpg"
        },
        {
            name: "Rheina Krisha Arpon",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Arpon.jpg"
        },
        {
            name: "John Prats Baculfo",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Baculfo.jpg"
        },
        {
            name: "John Carl Badiola",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Badiola.jpg"
        },
        {
            name: "Edwin Bautista",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Bautista.jpg"
        },
        {
            name: "Clyde Allen Caras",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Caras.jpg"
        },
        {
            name: "Yhael Cruz",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Cruz.jpg"
        },
        {
            name: "Ronald Dela Cerna",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/DelaCerna.jpg"
        },
        {
            name: "Franchesca Dela Cruz",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/DelaCruz.jpg"
        },
        {
            name: "Russel John Dion",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Dion.jpg"
        },
        {
            name: "John Cyrus Dizon",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Dizon.jpg"
        },
        {
            name: "John Michael Enero",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Enero.jpg"
        },
        {
            name: "Ashley Kim Escaran",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Escaran.jpg"
        },
        {
            name: "John Prats Espina",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Espina.jpg"
        },
        {
            name: "John Prats Esquijo",
            hobby: "Programming",
            favColor: "Unknown",
            photo: "assets/classmates/Esquijo.jpg"
        },
        {
            name: "Riza Jimenez",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Jimenez.jpg"
        },
        {
            name: "John Prats Larracas",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Larracas.jpg"
        },
        {
            name: "Sarwyn Lucario",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Lucario.jpg"
        },
        {
            name: "Rumregan Magtubo",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Magtubo.jpg"
        },
        {
            name: "Jearmeagne Cathalin Martinez",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Martinez.jpg"
        },
        {
            name: "John Prats Mayao",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Mayao.jpg"
        },
        {
            name: "John Qurry Mayote",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Mayote.jpg"
        },
        {
            name: "Milbert James Mendoza",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Mendoza.jpg"
        },
        {
            name: "Micah Arriane Relopez",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Micah.jpg"
        },
        {
            name: "Lexus Monion",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Monion.jpg"
        },
        {
            name: "John Paul Nagal",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Nagal.jpg"
        },
        {
            name: "Reynan Quisel",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Quisel.jpg"
        },
        {
            name: "Erv Carlos Ramirez",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Ramirez.jpg"
        },
        {
            name: "Ryan Regondige",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Regondige.jpg"
        },
        {
            name: "Muhyul Sabas",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Sabas.jpg"
        },
        {
            name: "Jhon Aizen Santos",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Santos.jpg"
        },
        {
            name: "Nica Silva",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Silva.jpg"
        },
        {
            name: "Joshans Tengson",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Tengson.jpg"
        },
        {
            name: "Esher Nice Zamora",
            hobby: "Unknown",
            favColor: "Unknown",
            photo: "assets/classmates/Zamora.jpg"
        },
    ];

    /*DIRECTORY ENGINE RENDER LOGIC*/
    function renderRosterDirectory() {
        rosterGrid.innerHTML = "";

        classmates.forEach(student => {
            const card = document.createElement('div');
            card.className = 'roster-card';
            card.innerHTML = `
                <img src="${student.photo}" alt="${student.name}" class="roster-avatar" onerror="this.src='https://placehold.co/100x100/000000/00FF00?text=USER_NODE'"/>
                <div class="roster-info">
                    <h3>${student.name}</h3>
                    <div class="roster-meta"><span>HOBBY:</span> ${student.hobby}</div>
                    <div class="roster-meta"><span>COLOR:</span> ${student.favColor}</div>
                </div>
            `;
            rosterGrid.appendChild(card);
        });
    }

    /*INTERFACE NAVIGATION ROUTING (WITH GLITCH ENGINE)*/
    rosterToggle.addEventListener('click', () => {
        loginCard.classList.add('terminal-glitch-active');

        setTimeout(() => {
            renderRosterDirectory();
            galleryWrapper.classList.add('hidden');
            rosterZone.classList.remove('hidden');
            rosterToggle.classList.add('hidden'); // Clear button on entry

            terminalTitle.textContent = "SYSTEM.DB // ICT-1_ROSTER";
            nodeBadge.textContent = "DIRECTORY_ACTIVE";
        }, 220);

        setTimeout(() => {
            loginCard.classList.remove('terminal-glitch-active');
        }, 450);
    });

    backToMainBtn.addEventListener('click', () => {
        loginCard.classList.add('terminal-glitch-active');

        setTimeout(() => {
            rosterZone.classList.add('hidden');
            galleryWrapper.classList.remove('hidden');
            rosterToggle.classList.remove('hidden'); // Restore button visibility

            terminalTitle.textContent = "SYSTEM.INIT // ICT-1";
            nodeBadge.textContent = "SECURE_NODE";
        }, 220);

        setTimeout(() => {
            loginCard.classList.remove('terminal-glitch-active');
        }, 450);
    });

    /*INTERFACE THEME STABILIZER*/
    themeToggle.addEventListener('click', () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');

        themeToggle.classList.add('click-spin');
        setTimeout(() => themeToggle.classList.remove('click-spin'), 500);

        if (currentTheme === 'dark') {
            root.setAttribute('data-theme', 'light');
            toggleIcon.src = 'assets/moon.png';
        } else {
            root.setAttribute('data-theme', 'dark');
            toggleIcon.src = 'assets/sun.png';
        }
    });

    /*AUTHENTICATION TRANSACTION CONTROLLER*/
    const processLogin = () => {
        const result = verifyCredentials(usernameInput.value, passwordInput.value);

        if (result.success) {
            authStatus.textContent = result.message;
            authStatus.style.color = 'var(--accent-color)';
            renderMockCards();

            setTimeout(() => {
                loginCard.classList.add('dashboard-expanded');
                authPanel.classList.add('hidden');
                galleryWrapper.classList.remove('hidden');
                rosterToggle.classList.remove('hidden'); // Reveal directory badge inline
            }, 600);
        } else {
            authStatus.textContent = `CRITICAL_ERROR: ${result.message}`;
            authStatus.style.color = '#ff3333';
            loginCard.classList.add('terminal-error-shake');
            setTimeout(() => loginCard.classList.remove('terminal-error-shake'), 400);
        }
    };

    function renderMockCards() {
        const memoryGrid = document.getElementById('memoryGrid');
        memoryGrid.innerHTML = `
            <div class="student-card">
                <div class="card-inner">
                    <h3>YOUR NAME GOES HERE</h3>
                    <span class="student-role">SYSTEM_ARCHITECT</span>
                    <p class="student-bio">"Building industrial-grade front-end code bases while others use copy-paste templates."</p>
                </div>
            </div>
            <div class="student-card">
                <div class="card-inner">
                    <h3>CLASS_MEMORIES_01</h3>
                    <span class="student-role">LOG_ENTRY_NODE</span>
                    <p class="student-bio">"ICT-1 Launch Day project terminal interface module fully operational."</p>
                </div>
            </div>
        `;
    }

    loginBtn.addEventListener('click', processLogin);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processLogin();
    });

    logoutBtn.addEventListener('click', () => {
        invalidateSession();
        loginCard.classList.remove('dashboard-expanded');
        authPanel.classList.remove('hidden');
        galleryWrapper.classList.add('hidden');
        rosterZone.classList.add('hidden');
        rosterToggle.classList.add('hidden');

        usernameInput.value = '';
        passwordInput.value = '';
        authStatus.textContent = 'AWAITING_INPUT...';
        authStatus.style.color = 'var(--text-color)';
        terminalTitle.textContent = "SYSTEM.INIT // ICT-1";
        nodeBadge.textContent = "SECURE_NODE";
    });
});