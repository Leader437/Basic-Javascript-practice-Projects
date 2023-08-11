
let css = document.querySelector('.css');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');


let gradient = () => {
    let color1Value = color1.value;
    let color2Value = color2.value;
    body.style.background = "linear-gradient(to right, " + color1Value + ", " + color2Value + ")";
    css.textContent = body.style.background;
}

color1.addEventListener('input', gradient);

color2.addEventListener('input', gradient);
