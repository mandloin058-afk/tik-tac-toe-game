
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      if (username === "Nandini" && password === "12345") {
        message.style.color = "green";
        message.textContent = "Login successful!";
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("gameBox").style.display = "block";
      } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
      }
    });  

    // TIC TAC TOE LOGIC
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const resetBtn = document.getElementById("resetBtn");
    let currentPlayer = "X";
    let gameOver = false;
    let board = ["", "", "", "", "", "", "", "", ""];

    const winPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];

    function handleClick(e) {
      const index = e.target.getAttribute("data-index");
      if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (!gameOver) statusText.textContent = `Player ${currentPlayer}'s turn`;
      }
    }

    function checkWinner() {
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          statusText.textContent = `Player ${board[a]} Wins!`;
          gameOver = true;
          return;
        }
      }
      if (!board.includes("")) {
        statusText.textContent = "It's a Draw!";
        gameOver = true;
      }
    }

    function resetGame() {
      board = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      gameOver = false;
      statusText.textContent = `Player ${currentPlayer}'s turn`;
      cells.forEach(cell => cell.textContent = "");
    }

    cells.forEach(cell => cell.addEventListener("click", handleClick));
    resetBtn.addEventListener("click", resetGame);
  