document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.tile-container');

    // Calculate number of rows and columns dynamically
    const rows = Math.ceil(window.innerHeight / 50);
    const cols = Math.ceil(window.innerWidth / 50);

    // Create tiles
    for (let i = 0; i < rows * cols; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        container.appendChild(tile);

        // Add hover effect
        tile.addEventListener('mousemove', () => {
            tile.style.transform = `scale(1.2)`;
            tile.style.backgroundColor = `#777`;
        });

        tile.addEventListener('mouseleave', () => {
            tile.style.transform = `scale(1)`;
            tile.style.backgroundColor = `#444`;
        });
    }
});
