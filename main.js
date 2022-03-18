const container = document.querySelector('.container');
const btnClear = document.querySelector('.btn-clear');
const btnColored = document.querySelector('.btn-colored');
const colorSelection = document.querySelector('.color-selection');
const btnGray = document.querySelector('.btn-gray');

function userSquareSide() {
    const squareSide = Number(prompt('What number of squares per side?'));
    if (squareSide > 100) return false;
    return squareSide;
}

function createDivs() {
    let squareSide = userSquareSide();
    while (!squareSide) {
        alert('Enter a value less than 100.');
        squareSide = userSquareSide();
    }

    for (let row = 1; row <= squareSide; row++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        container.appendChild(divRow);

        for (let collumns = 1; collumns <= squareSide; collumns++) {
            const divCollumns = document.createElement('div');
            divCollumns.classList.add('collumn');
            divRow.appendChild(divCollumns);

            divCollumns.setAttribute(`style`, `width:${480 / squareSide}px;
            height: ${400 / squareSide}px`);
        }
    }
}

createDivs();

function colorRandom() {
    return Math.round(Math.random() * 255);
}

let auxClass = 1;
let alpha;
let checkColor = false;

container.addEventListener('mouseout', e => {
    if (e.target.className === 'container') return;
    if (e.target.className === 'border') return;

    if (!checkColor) {
        if (!e.target.dataset.mouseout) {
            e.target.dataset.mouseout = `${auxClass}`;
        } else {
            e.target.dataset.mouseout += `${auxClass}`;
        }
    
        if (e.target.dataset.mouseout.length >= 10) {
            e.target.style.cssText += `background: rgba(0, 0, 0, 1);`;
            return;
        }
    
        alpha = e.target.dataset.mouseout.length * 0.1;
    
        e.target.style.cssText += `background: rgba(0, 0, 0, ${alpha});`;
        return;
    }

    //* Colored squares:
    const red = colorRandom();
    const green = colorRandom();
    const blue = colorRandom();
    e.target.style.cssText += `background: rgba(${red}, ${green}, ${blue});`;

});

btnClear.addEventListener('click', e => {
    const clearRow = document.querySelectorAll('.row');

    for (div of clearRow) {
        container.removeChild(div);
    }
    createDivs();
});

btnColored.addEventListener('click', e => {
    checkColor = true;
    return;
});

btnGray.addEventListener('click', e => {
    checkColor = false;
    return;
})
