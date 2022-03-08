const container = document.querySelector('.container');
const button = document.querySelector('button');

function userSquareSide() {
    const squareSide = Number(prompt('What number of squares per side?'));
    if (squareSide > 100) return false;
    return squareSide;
}

function createDivs() {
    let squareSide = userSquareSide();
    while (!squareSide) {
        alert ('Enter a value less than 100.');
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
        
            divCollumns.setAttribute(`style`, `width:${480/squareSide}px;
            height: ${480/squareSide}px`);
        }
    }
}

createDivs();

function colorRandom() {
    return Math.round(Math.random() * 255);
}



container.addEventListener('mouseout', e => {
    if (e.target.className !== 'collumn') return;

    const r = colorRandom();
    const g = colorRandom();
    const b = colorRandom();
    
    console.log(e);


    e.target.style.cssText += `background: rgba(${r}, ${g}, ${b});`;
    // e.target.style.cssText += `background: rgba(0, 0, 0, ${a});`;
});

button.addEventListener('click', e => {
    const clearRow = document.querySelectorAll('.row');

    for(div of clearRow){
        container.removeChild(div);
    }
    createDivs();
});