export function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    const fontSize = 20;
    let columns;
    let drops = [];
    // NEW STRUCTURE: Store both the Y position AND the locked character string
    let dropCharacters = [];

    function calculateGridDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);

        const currentLength = drops.length;
        if (currentLength < columns) {
            for (let x = currentLength; x < columns; x++) {
                drops[x] = canvas.height + (Math.random() * 2000);
                // Lock the character identity right here at birth!
                dropCharacters[x] = Math.random() > 0.5 ? "1" : "0";
            }
        }
    }

    function draw() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const accentColor = getComputedStyle(root).getPropertyValue('--accent-color').trim();

        ctx.fillStyle = currentTheme === 'dark' ? 'rgba(2, 10, 3, 0.22)' : 'rgba(232, 245, 233, 0.22)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // REVERTED: Back to your clean, thematic color variable
        ctx.fillStyle = accentColor;
        ctx.font = `bold ${fontSize}px 'Jersey 10', monospace`;

        for (let i = 0; i < columns; i++) {
            // Draw the FIXED locked character instead of a randomized flashing one
            ctx.fillText(dropCharacters[i], i * fontSize, drops[i]);

            drops[i] -= 1.8;

            // When resetting, assign a brand new locked identity for its next run
            if (drops[i] < -fontSize) {
                drops[i] = canvas.height + Math.random() * 600;
                dropCharacters[i] = Math.random() > 0.5 ? "1" : "0";
            }
        }

        requestAnimationFrame(draw);
    }

    document.fonts.ready.then(() => {
        calculateGridDimensions();
        draw();
    });

    window.addEventListener('resize', () => {
        calculateGridDimensions();
    });
}