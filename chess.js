import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, push, set } from "firebase/database";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCteEhy_uilhR1-58V0UnxX31dtTKvZrcQ",
        authDomain: "chess-with-luis.firebaseapp.com",
        databaseURL: "https://chess-with-luis-default-rtdb.firebaseio.com",
        projectId: "chess-with-luis",
        storageBucket: "chess-with-luis.firebasestorage.app",
        messagingSenderId: "183522721938",
        appId: "1:183522721938:web:9c449c35d194898e42264b",
        measurementId: "G-NRZQGM0XGM"
      };
  
      const app = initializeApp(firebaseConfig);
    //   const analytics = getAnalytics(app);
      const db = getDatabase(app);
  
    const board = Chessboard('board', {
      draggable: true,
      position: 'start',
      onDrop: handleMove
    });
  
    const game = new Chess();
    let currentGameId = null;
  
    // Load active games
    db.ref('games').on('value', (snapshot) => {
      const games = snapshot.val();
      displayGames(games);
    });
  
    function displayGames(games) {
      const gameList = document.getElementById('game-list');
      gameList.innerHTML = '';
      for (const id in games) {
        const gameData = games[id];
        const li = document.createElement('li');
        li.textContent = `${gameData.player} vs. You`;
        li.dataset.gameId = id;
        li.addEventListener('click', () => loadGame(id, gameData));
        gameList.appendChild(li);
      }
    }
  
    function loadGame(id, gameData) {
      currentGameId = id;
      game.reset();
      gameData.moves.forEach(move => game.move(move));
      board.position(game.fen());
    }
  
    function handleMove(source, target) {
      const move = game.move({ from: source, to: target });
      if (move === null) return 'snapback';
      updateGame(move.san);
    }
  
    function updateGame(move) {
      if (!currentGameId) {
        const playerName = prompt("Enter your name:", "New Player") || "Anonymous";
        const newGameRef = db.ref('games').push();
        currentGameId = newGameRef.key;
        newGameRef.set({
          player: playerName,
          moves: [move],
          lastMove: move
        });
      } else {
        db.ref(`games/${currentGameId}`).once('value').then(snapshot => {
          const gameData = snapshot.val();
          gameData.moves.push(move);
          gameData.lastMove = move;
          db.ref(`games/${currentGameId}`).set(gameData);
        });
      }
    }
  
    // New Game Button Functionality
    document.getElementById('new-game-btn').addEventListener('click', () => {
      // Reset the board
      board.start();
      game.reset();
  
      // Create a new game in Firebase
      const playerName = prompt("Enter your name:", "New Player") || "Anonymous";
      const newGameRef = db.ref('games').push();
      currentGameId = newGameRef.key;
      newGameRef.set({
        player: playerName,
        moves: [],
        lastMove: null
      });
    });
  
    document.getElementById('reset-btn').addEventListener('click', () => {
      board.start();
      game.reset();
    });
  });
  