---
layout: default
title: Chess with Luis
---


<main class="page-content">
  <h1>Chess with Luis</h1>

  <!-- Chess Board -->
  <div id="board" style="width: 400px; margin: auto;"></div>
  <button id="reset-btn">Reset Board</button>
  <!-- Add this button inside the <main> section -->
<button id="new-game-btn">New Game</button>


  <!-- Active Games Section -->
  <div id="games">
    <h2>Active Games</h2>
    <ul id="game-list">
      <!-- Game list will be populated dynamically -->
    </ul>
  </div>

  <!-- History Controls -->
  <div id="history-controls">
    <button id="prev-move">Previous Move</button>
    <button id="next-move">Next Move</button>
  </div>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.11.0/chess.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"></script>
<script src="/chess.js"></script>
