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
  
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("visible");
}

document.addEventListener("DOMContentLoaded", () => {
  const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'snapback', // Snap pieces back if dropped off the board
    position: 'start',        // Initial position
    onDrop: handleMove        // Callback for handling moves
  });

  const game = new Chess(); // Chess.js handles game logic

  // Handle piece movements
  function handleMove(source, target) {
    const move = game.move({ from: source, to: target });
    if (move === null) return 'snapback'; // Invalid move
  }

  // Reset the board
  document.getElementById('reset-btn').addEventListener('click', () => {
    board.start();
    game.reset();
  });
});

const games = [
  { id: 1, player: "Doe", moves: ["e4", "e5", "Nf3"] },
  { id: 2, player: "Smith", moves: ["d4", "d5", "c4"] }
];

const gameList = document.getElementById('game-list');

// Populate active games list
games.forEach((game) => {
  const li = document.createElement('li');
  li.textContent = `${game.player} vs. You`;
  li.dataset.gameId = game.id;

  // Click to view game
  li.addEventListener('click', () => {
    viewGame(game);
  });

  gameList.appendChild(li);
});

// Function to load a specific game
function viewGame(game) {
  console.log(`Viewing game with ${game.player}`);
  const board = Chessboard('board', {
    position: 'start'
  });
  const chess = new Chess();
  game.moves.forEach(move => chess.move(move)); // Apply all moves
  board.position(chess.fen()); // Set board to current game state
}

let currentMoveIndex = 0;

function loadGameHistory(game) {
  const chess = new Chess();
  const board = Chessboard('board', { position: 'start' });

  document.getElementById('prev-move').addEventListener('click', () => {
    if (currentMoveIndex > 0) {
      currentMoveIndex--;
      chess.reset();
      game.moves.slice(0, currentMoveIndex).forEach(move => chess.move(move));
      board.position(chess.fen());
    }
  });

  document.getElementById('next-move').addEventListener('click', () => {
    if (currentMoveIndex < game.moves.length) {
      currentMoveIndex++;
      chess.reset();
      game.moves.slice(0, currentMoveIndex).forEach(move => chess.move(move));
      board.position(chess.fen());
    }
  });
}


  