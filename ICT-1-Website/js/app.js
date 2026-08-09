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

    // Social Feed Element
    const eventsFeed = document.getElementById('eventsFeed');

    /* SCALABLE DATABASE 1: CLASS ROSTER */
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
    /* SCALABLE DATABASE 2: SOCIAL EVENTS LOG: Copy and paste a new block here to add future images! */
    const eventsData = [
        {
            id: 1,
            image: "assets/event_1.jpg",
            caption: "> LOG_ENTRY_001: Us at the mall where we later eat food and play Mobile Legend in the Food Court, After a computer programming activity
            likes: 43,
            isLiked: false,
            comments: [
                { user: "SYSTEM_ARCHITECT", text: "Core memories successfully archived." },
                { user: "USER_NODE_89", text: "Such a great day!" }
            ]
        }
        // Pasting a new { id: 2, image: "assets/event_2.jpg"... } will auto-generate below this!
    ];

    /* ==========================================
       1. DIRECTORY & SOCIAL FEED RENDER ENGINES
       ========================================== */
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

    function renderSocialFeed() {
        if (!eventsFeed) return;
        eventsFeed.innerHTML = "";

        eventsData.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';

            const likeText = event.isLiked ? `[LIKED: ${event.likes}]` : `[LIKE: ${event.likes}]`;
            const likeClass = event.isLiked ? 'action-btn liked' : 'action-btn';

            const commentsHTML = event.comments.map(c =>
                `<div class="comment-item"><strong>${c.user}:</strong> ${c.text}</div>`
            ).join('');

            card.innerHTML = `
                <img src="${event.image}" alt="Event Node" class="event-img" onerror="this.src='https://placehold.co/600x400/000000/00FF00?text=IMAGE_OFFLINE'"/>
                <div class="event-caption">${event.caption}</div>

                <div class="event-actions">
                    <button class="${likeClass} like-btn" data-id="${event.id}">
                        <i class="fas fa-heart"></i> <span>${likeText}</span>
                    </button>
                    <button class="action-btn">
                        <i class="fas fa-comment"></i> [COMMENTS: ${event.comments.length}]
                    </button>
                </div>

                <div class="comments-section">
                    ${commentsHTML}
                </div>

                <div class="comment-input-group">
                    <input type="text" id="comment-input-${event.id}" placeholder="> TYPE COMMENT OVERRIDE..." autocomplete="off"/>
                    <button class="cyber-btn-secondary submit-comment-btn" data-id="${event.id}">TRANSMIT</button>
                </div>
            `;
            eventsFeed.appendChild(card);
        });
    }

    // INTERACTIVE FEED LISTENER: Handles Likes and Comments safely dynamically
    if (eventsFeed) {
        eventsFeed.addEventListener('click', (e) => {
            // Like Button Logic
            const likeBtn = e.target.closest('.like-btn');
            if (likeBtn) {
                const eventId = parseInt(likeBtn.getAttribute('data-id'));
                const targetEvent = eventsData.find(ev => ev.id === eventId);
                if (targetEvent) {
                    targetEvent.isLiked = !targetEvent.isLiked;
                    targetEvent.likes += targetEvent.isLiked ? 1 : -1;
                    renderSocialFeed(); // Refresh interface
                }
            }

            // Comment Submit Logic
            const submitBtn = e.target.closest('.submit-comment-btn');
            if (submitBtn) {
                const eventId = parseInt(submitBtn.getAttribute('data-id'));
                const inputField = document.getElementById(`comment-input-${eventId}`);

                if (inputField && inputField.value.trim() !== '') {
                    const targetEvent = eventsData.find(ev => ev.id === eventId);
                    targetEvent.comments.push({
                        user: "ACTIVE_USER", // Hardcoded for session
                        text: inputField.value.trim()
                    });
                    renderSocialFeed(); // Refresh interface
                }
            }
        });
    }

    /* ==========================================
       2. INTERFACE NAVIGATION ROUTING
       ========================================== */
    rosterToggle.addEventListener('click', () => {
        loginCard.classList.add('terminal-glitch-active');
        setTimeout(() => {
            renderRosterDirectory();
            galleryWrapper.classList.add('hidden');
            rosterZone.classList.remove('hidden');
            rosterToggle.classList.add('hidden');

            terminalTitle.textContent = "SYSTEM.DB // ICT-1_ROSTER";
            nodeBadge.textContent = "DIRECTORY_ACTIVE";
        }, 220);
        setTimeout(() => loginCard.classList.remove('terminal-glitch-active'), 450);
    });

    backToMainBtn.addEventListener('click', () => {
        loginCard.classList.add('terminal-glitch-active');
        setTimeout(() => {
            rosterZone.classList.add('hidden');
            galleryWrapper.classList.remove('hidden');
            rosterToggle.classList.remove('hidden');

            terminalTitle.textContent = "SYSTEM.INIT // ICT-1";
            nodeBadge.textContent = "SECURE_NODE";
        }, 220);
        setTimeout(() => loginCard.classList.remove('terminal-glitch-active'), 450);
    });

    /* ==========================================
       3. INTERFACE THEME STABILIZER
       ========================================== */
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

    /* AUTHENTICATION TRANSACTION CONTROLLER */
    const processLogin = () => {
        const result = verifyCredentials(usernameInput.value, passwordInput.value);

        if (result.success) {
            authStatus.textContent = result.message;
            authStatus.style.color = 'var(--accent-color)';
            renderSocialFeed(); // Call new feed engine upon entry!

            setTimeout(() => {
                loginCard.classList.add('dashboard-expanded');
                authPanel.classList.add('hidden');
                galleryWrapper.classList.remove('hidden');
                rosterToggle.classList.remove('hidden');
            }, 600);
        } else {
            authStatus.textContent = `CRITICAL_ERROR: ${result.message}`;
            authStatus.style.color = '#ff3333';
            loginCard.classList.add('terminal-error-shake');
            setTimeout(() => loginCard.classList.remove('terminal-error-shake'), 400);
        }
    };

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
