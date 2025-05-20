// 1. Canvas and Context
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// 2. Game Elements - Properties
// Paddles
const paddleWidth = 10;
const paddleHeight = 100;

const player = {
    x: 0,
    y: canvasHeight / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'blue',
    dy: 0 // vertical speed
};

const opponent = {
    x: canvasWidth - paddleWidth,
    y: canvasHeight / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'red',
    dy: 0 // vertical speed
};

// Ball
const ballRadius = 7;
const ball = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    radius: ballRadius,
    speedX: 5, // initial horizontal speed
    speedY: 5, // initial vertical speed
    color: 'white'
};

// Score
let playerScore = 0;
let opponentScore = 0;
const WINNING_SCORE = 5;
let gameOver = false;

// Net (Optional, for visual)
const net = {
    x: canvasWidth / 2 - 1, // center of the canvas, adjusted for width
    y: 0,
    width: 2,
    height: 10, // height of each segment
    color: 'grey'
};

// 3. Drawing Functions
function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

function drawNet() {
    for (let i = 0; i <= canvasHeight; i += 15) { // Draw dashed line
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

function drawText(text, x, y, color, font = '16px Arial') {
    context.fillStyle = color;
    context.font = font;
    context.fillText(text, x, y);
}

// 4. Initial Rendering Function
function renderInitialState() {
    // Clear the canvas (though gameLoop will also do this)
    context.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the entire canvas

    // Set a background color for the canvas (optional, if not set in CSS or if CSS is overridden)
    drawRect(0, 0, canvasWidth, canvasHeight, 'black');


    // Draw elements
    drawNet();
    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(opponent.x, opponent.y, opponent.width, opponent.height, opponent.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

    // Example of drawing scores (will be updated dynamically later)
    // drawText('Player: 0', 50, 30, 'white');
    // drawText('Opponent: 0', canvasWidth - 150, 30, 'white');
}


// 5. Game Loop Structure
function gameLoop() {
    // Clear the canvas
    // context.clearRect(0, 0, canvasWidth, canvasHeight); // Already done in renderInitialState for now
                                                            // and will be the first step in actual game updates
    drawRect(0, 0, canvasWidth, canvasHeight, 'black'); // Draw background

    // Draw game elements
    drawNet();
    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(opponent.x, opponent.y, opponent.width, opponent.height, opponent.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

    // (Movement, collision detection, score updates will go here in later steps)

    // Call gameLoop again for the next frame
    requestAnimationFrame(gameLoop);
}

// 6. Player Paddle Movement
canvas.addEventListener('mousemove', movePlayerPaddle);

function movePlayerPaddle(event) {
    let rect = canvas.getBoundingClientRect();
    player.y = event.clientY - rect.top - player.height / 2;

    // Prevent paddle from going off-screen
    if (player.y < 0) {
        player.y = 0;
    } else if (player.y + player.height > canvasHeight) {
        player.y = canvasHeight - player.height;
    }
}

// Collision Detection function
function collision(b, p) { // b for ball, p for paddle
    return b.x + b.radius > p.x && // ball right edge vs paddle left edge
           b.x - b.radius < p.x + p.width && // ball left edge vs paddle right edge
           b.y + b.radius > p.y && // ball bottom edge vs paddle top edge
           b.y - b.radius < p.y + p.height; // ball top edge vs paddle bottom edge
}

// Reset Ball function
function resetBall() {
    ball.x = canvasWidth / 2;
    ball.y = canvasHeight / 2;
    ball.speedX = -ball.speedX; // Change direction to the player who conceded
    ball.speedY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 3 + 2); // Random Y speed and direction
}

// Update function (called in gameLoop)
function update() {
    if (gameOver) return;

    // Ball Movement
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Ball Collision - Top and Bottom Walls
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvasHeight) {
        ball.speedY = -ball.speedY;
    }

    // Opponent Paddle (Simple AI)
    opponent.y += (ball.y - (opponent.y + opponent.height / 2)) * 0.09; // Slightly adjusted AI speed

    // Prevent opponent paddle from going off-screen
    if (opponent.y < 0) {
        opponent.y = 0;
    } else if (opponent.y + opponent.height > canvasHeight) {
        opponent.y = canvasHeight - opponent.height;
    }

    // Ball Collision - Paddles
    let targetPaddle = ball.x < canvasWidth / 2 ? player : opponent;
    if (collision(ball, targetPaddle)) {
        ball.speedX = -ball.speedX;

        // Optional: Adjust Y speed based on hit location (simple version)
        let deltaY = ball.y - (targetPaddle.y + targetPaddle.height / 2);
        ball.speedY = deltaY * 0.25; // The further from center, the more angle

        // Optional: Increase ball speed
        // ball.speedX *= 1.05;
        // ball.speedY *= 1.05;
    }

    // Scoring System
    if (ball.x - ball.radius < 0) { // Opponent scores
        opponentScore++;
        resetBall();
    } else if (ball.x + ball.radius > canvasWidth) { // Player scores
        playerScore++;
        resetBall();
    }

    // Check for Game Over
    if (playerScore === WINNING_SCORE || opponentScore === WINNING_SCORE) {
        gameOver = true;
    }
}

// Draw function (called in gameLoop)
function drawGameElements() {
    // Clear the canvas
    drawRect(0, 0, canvasWidth, canvasHeight, 'black'); // Draw background

    // Draw game elements
    drawNet();
    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(opponent.x, opponent.y, opponent.width, opponent.height, opponent.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

    // Display Scores
    drawText(playerScore.toString(), canvasWidth / 4, canvasHeight / 5, 'white', '30px Arial');
    drawText(opponentScore.toString(), 3 * canvasWidth / 4, canvasHeight / 5, 'white', '30px Arial');

    // Display Game Over Message
    if (gameOver) {
        let message = playerScore === WINNING_SCORE ? "Player Wins!" : "Opponent Wins!";
        drawText(message, canvasWidth / 2 - 100, canvasHeight / 2, 'yellow', '40px Arial');
        drawText("Refresh to Play Again", canvasWidth / 2 - 120, canvasHeight / 2 + 40, 'white', '20px Arial');
    }
}

// 5. Game Loop Structure
function gameLoop() {
    update(); // Update game state
    drawGameElements(); // Draw the game

    // Call gameLoop again for the next frame if game is not over
    if (!gameOver) {
        requestAnimationFrame(gameLoop);
    }
}

// 7. Initial Call & Ball Serve
resetBall(); // Serve the ball initially
ball.speedX = 5; // Ensure initial serve goes towards player or opponent consistently
requestAnimationFrame(gameLoop); // Start the game loop
