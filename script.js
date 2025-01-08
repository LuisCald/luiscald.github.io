// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector('.tile-container');

//     // Calculate number of rows and columns dynamically
//     const rows = Math.ceil(window.innerHeight / 50);
//     const cols = Math.ceil(window.innerWidth / 50);

//     // Create tiles
//     for (let i = 0; i < rows * cols; i++) {
//         const tile = document.createElement('div');
//         tile.classList.add('tile');
//         container.appendChild(tile);

//         // Add hover effect
//         tile.addEventListener('mousemove', () => {
//             tile.style.transform = `scale(1.2)`;
//             tile.style.backgroundColor = `#777`;
//         });

//         tile.addEventListener('mouseleave', () => {
//             tile.style.transform = `scale(1)`;
//             tile.style.backgroundColor = `#444`;
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector(".tile-container");
  
//     // Define an array of colors
//     const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC733"];
  
//     // Dynamically create tiles
//     const rows = Math.ceil(window.innerHeight / 50);
//     const cols = Math.ceil(window.innerWidth / 50);
  
//     for (let i = 0; i < rows * cols; i++) {
//       const tile = document.createElement("div");
//       tile.classList.add("tile");
  
//       // Assign a random color from the colors array
//       const randomColor = colors[Math.floor(Math.random() * colors.length)];
//       tile.style.background = randomColor;
  
//       // Add random animation delay to stagger the tiles
//       tile.style.animationDelay = `${Math.random() * 5}s`;
  
//       container.appendChild(tile);
//     }
//   });
  
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".tile-container");
  
    // Define tile size
    const tileSize = 50; // Width and height of each tile
    const rows = Math.ceil(window.innerHeight / tileSize);
    const cols = Math.ceil(window.innerWidth / tileSize);
  
    // Track occupied positions
    const occupiedPositions = new Set();
  
    for (let i = 0; i < rows * cols; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
  
      // Assign a random color
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC733"];
      tile.style.background = colors[Math.floor(Math.random() * colors.length)];
  
      // Generate unique position
      let position;
      do {
        const x = Math.floor(Math.random() * cols) * tileSize;
        const y = Math.floor(Math.random() * rows) * tileSize;
        position = `${x},${y}`;
      } while (occupiedPositions.has(position)); // Ensure the position is not already taken
  
      // Mark the position as occupied
      occupiedPositions.add(position);
  
      // Set the position of the tile
      tile.style.position = "absolute";
      tile.style.left = `${position.split(",")[0]}px`;
      tile.style.top = `${position.split(",")[1]}px`;
  
      // Add random animation delay to stagger tiles
      tile.style.animationDelay = `${Math.random() * 5}s`;
  
      container.appendChild(tile);
    }
  });
  