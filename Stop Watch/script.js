

let time = document.querySelector('.time');
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');
let playIcon = document.querySelector('#start > i');

// Basic Variables
let second = 0;
let minute = 0;
let hour = 0;

// leading zero variables
let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

// current status variables
let timeInterval = null;
let timerStatus = "stopped";

let stopWatch = () => {
    second++;

    if (second / 60 === 1) {
        second = 0;
        minute++;
    }

    if (minute / 60 === 1) {
        minute = 0;
        hour++;
    }

    let leadingZero = (zero) => {
        if (zero < 10) {
            return '0' + zero;
        } else {
            return zero;
        }
    }

    leadingSecond = leadingZero(second);
    leadingMinute = leadingZero(minute);
    leadingHour = leadingZero(hour);

    time.innerText = leadingHour + ":" + leadingMinute + ":" + leadingSecond;
}

start.addEventListener('click', function () {

    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        this.classList.add('started');
        playIcon.classList.remove('bx-play');
        playIcon.classList.add('bx-pause');

        timerStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        this.classList.remove('started');
        playIcon.classList.add('bx-play');
        playIcon.classList.remove('bx-pause');

        timerStatus = "stopped";
    }
});

reset.addEventListener('click', function () {
    window.clearInterval(timeInterval);

    second = 0;
    minute = 0;
    hour = 0;

    start.classList.remove('started');
    playIcon.classList.add('bx-play');
    playIcon.classList.remove('bx-pause');
    timerStatus = "stopped";

    time.innerText = "00:00:00"
});

