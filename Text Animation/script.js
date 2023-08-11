
let typeText = document.querySelector('.type-writer-text');

let skills = ['Web Developer', 'Blogger', 'Web Designer'];
let textArrayIndex = 0;
let charIndex = 0;

let type = () => {
    if (charIndex <= skills[textArrayIndex].length - 1) {
        typeText.textContent += skills[textArrayIndex].charAt(charIndex);
        charIndex++
        setTimeout(type, 100);    // this is a part of function, 1st time we call the function manually in eventlistener below but than 2nd time it runs due to this line because calling the function is also the part of this function so tachnically untill the conditions will keep on meeting this function will keep on running, So We run 1st function in event listener than 2nd function will run cuz we called it in the end of 1st function and than 3rd function will run cuz we called it in the end of 2nd function and this will create a loop untill there will be a function where if condition isn't met and this loop stops there
    } else {
        setTimeout(erase, 2000); // break after completing a word
    }
}

let erase = () => {
    if (charIndex > 0) {
        typeText.textContent = skills[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60);    // interval between deleting 2 consecutive letters
    } else {
        textArrayIndex++;
        if(textArrayIndex >= skills.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, 500);   // delay between 2 different words
    }
}

document.addEventListener('DOMContentLoaded', function () {
    type();
});