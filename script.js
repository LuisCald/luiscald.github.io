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
  
// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector(".tile-container");
  
//     // Define tile size
//     const tileSize = 50; // Width and height of each tile
//     const rows = Math.ceil(window.innerHeight / tileSize);
//     const cols = Math.ceil(window.innerWidth / tileSize);
  
//     // Track occupied positions
//     const occupiedPositions = new Set();
  
//     for (let i = 0; i < rows * cols; i++) {
//       const tile = document.createElement("div");
//       const tileContainer = document.querySelector(".tile-container");
//       const tileCount = Math.min(window.innerWidth / 50 * window.innerHeight / 50, 200); // Adjust max tiles

//       for (let i = 0; i < tileCount; i++) {
//         const tile = document.createElement("div");
//         tile.classList.add("tile");
//         tileContainer.appendChild(tile);
//       }

//       tile.classList.add("tile");
  
//       // Assign a random color
//       const colors = [
//         "#ADD8E6", // Light Blue
//         "#FFFACD", // Lemon Chiffon (Light Yellow)
//         "#FFE4E1", // Misty Rose (Light Pink)
//         "#E6E6FA", // Lavender
//         "#F0FFF0", // Honeydew (Soft Green)
//         "#FAFAD2", // Light Goldenrod Yellow
//         "#D3D3D3", // Light Gray
//         "#FFF5EE", // Seashell
//         "#F5F5DC", // Beige
//         "#F0F8FF"  // Alice Blue
//       ];      
//       tile.style.background = colors[Math.floor(Math.random() * colors.length)];
  
//       // Generate unique position
//       let position;
//       do {
//         const x = Math.floor(Math.random() * cols) * tileSize;
//         const y = Math.floor(Math.random() * rows) * tileSize;
//         position = `${x},${y}`;
//       } while (occupiedPositions.has(position)); // Ensure the position is not already taken
  
//       // Mark the position as occupied
//       occupiedPositions.add(position);
  
//       // Set the position of the tile
//       tile.style.position = "absolute";
//       tile.style.left = `${position.split(",")[0]}px`;
//       tile.style.top = `${position.split(",")[1]}px`;
  
//       // Add random animation delay to stagger tiles
//       tile.style.animationDelay = `${Math.random() * 5}s`;
  
//       container.appendChild(tile);
//     }
//   });
  
// function toggleMenu() {
//   const navLinks = document.getElementById("nav-links");
//   navLinks.classList.toggle("hidden");
//   navLinks.classList.toggle("visible");
// }

document.addEventListener("DOMContentLoaded", () => {
  const tileContainer = document.querySelector(".tile-container");
  const colors = [
      "#ADD8E6", "#FFFACD", "#FFE4E1", "#E6E6FA", "#F0FFF0",
      "#FAFAD2", "#D3D3D3", "#FFF5EE", "#F5F5DC", "#F0F8FF"
  ];

  const numTiles = Math.min(colors.length, 6); // 4 to 6 unique tiles
  const tileSize = Math.max(window.innerWidth, window.innerHeight) / 3; // Large tiles

  // Predefined positions for consistent layout
  const positions = [
      { left: "5%", top: "10%" },
      { left: "50%", top: "5%" },
      { left: "80%", top: "30%" },
      { left: "10%", top: "60%" },
      { left: "50%", top: "75%" },
      { left: "85%", top: "80%" }
  ];

  // Clear existing tiles before adding new ones
  tileContainer.innerHTML = "";

  // Use a set to track used colors (to prevent duplicates)
  const usedColors = new Set();

  for (let i = 0; i < numTiles; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      // Assign unique colors
      let color;
      do {
          color = colors[Math.floor(Math.random() * colors.length)];
      } while (usedColors.has(color));
      usedColors.add(color);

      tile.style.backgroundColor = color;
      tile.style.width = `${tileSize}px`;
      tile.style.height = `${tileSize}px`;
      tile.style.position = "absolute";
      tile.style.left = positions[i].left;
      tile.style.top = positions[i].top;
      tileContainer.appendChild(tile);
  }

  const tiles = document.querySelectorAll(".tile");

  // Smooth floating animation
  function animateTiles() {
      const time = Date.now() / 2000; // Slow, smooth movement

      tiles.forEach((tile, index) => {
          const offsetX = Math.sin(time + index) * 10; // Gentle horizontal sway
          const offsetY = Math.cos(time + index) * 10; // Gentle vertical sway
          tile.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      requestAnimationFrame(animateTiles);
  }

  requestAnimationFrame(animateTiles); // Start animation
});
