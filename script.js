document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.tile-container');
    
    // Dynamically create tiles
    const rows = Math.ceil(window.innerHeight / 50);
    const cols = Math.ceil(window.innerWidth / 50);

    for (let i = 0; i < rows * cols; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        container.appendChild(tile);

        // Hover effects
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
