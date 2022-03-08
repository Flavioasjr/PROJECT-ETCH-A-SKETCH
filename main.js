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
        const rowClass = document.querySelector('.row');
        container.appendChild(divRow);

        for (let collumns = 1; collumns <= squareSide; collumns++) {
            const divCollumns = document.createElement('div');
            divCollumns.classList.add('collumn');
            divRow.appendChild(divCollumns);
        }
    }
}

createDivs();

container.addEventListener('mouseout', e => {
    if (e.target.className !== 'collumn') return;

    e.target.style.cssText = 'background: rgba(0, 0, 0, 0.2);';
});

button.addEventListener('click', e => {
    const clearRow = document.querySelectorAll('.row');

    for(div of clearRow){
        container.removeChild(div);
    }
    createDivs();
});