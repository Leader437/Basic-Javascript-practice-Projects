let timer = 60;
let score = 0;
let hitValue = document.querySelector('#hitValue');
let scoreValue = document.querySelector('#scoreValue');
let contentPanel = document.querySelector('.panel-bottom');
let playBtn = document.querySelector('.play-btn');

let rn = () => {    // this gives us a random number between from 0 to 9
    return Math.floor(Math.random() * 10);
};

let increaseScore = () => {
    score += 10;
    scoreValue.textContent = score;
};

let newHit = () => {
    hitValue.textContent = rn();
};

let gameEnded = () => {      // the events after the game is ended
    contentPanel.innerHTML = `<h1>GAME OVER</h1><h3>Your Score is ${score}</h3>`;
    contentPanel.style.display = "grid";
    contentPanel.style.placeItems = "center";

    playBtn.style.display = "block";
    playBtn.addEventListener('click', function() {window.location.reload()});  // this will reload the window on clicking this button
}

let timerFunction = () => {
    let timerValue = document.querySelector('#timerValue');

    let timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerValue.textContent = timer;
        } else {
            clearInterval(timerInt);
            gameEnded();
        }
    }, 1000);
};

let makeBubble = () => {
    let bottomPanel = document.querySelector('.panel-bottom');
    let items = "";

    for (let i = 0; i < 168; i++) {
        items += `<div class="bubble">${rn()}</div>`
    }

    bottomPanel.innerHTML = items;
};

let runGame = () => {
    contentPanel.addEventListener('click', function (e) {
        let target = e.target;
        let targetValue = Number(target.textContent);

        if (targetValue == hitValue.textContent) {
            increaseScore();
            newHit();
            makeBubble();
        } else {
            alert("Wrong Choice");
        }
    });
};




let main = () => {
    timerFunction();   // this makes the 60s timer inside the timer box
    makeBubble();      // this recreates bubbles in the bottom panel
    newHit();          // this generates a random number to hit
    runGame();         // this is the main syntax of how the game shall be played
}

main();
