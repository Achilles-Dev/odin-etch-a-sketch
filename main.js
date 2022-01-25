const container = document.querySelector('.container');
const reset = document.querySelector('.reset');


function makeSquareGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', e => e.target.classList.add('hover-item'))
    }
}

reset.addEventListener('click', () => resetGrid());


makeSquareGrid(16, 16);

function removeChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function resetGrid(){
    removeChildNodes(container);
    let gridRow = prompt("Enter a number less than 100:");
    parseInt(gridRow);
    if ( gridRow < 1 || gridRow > 100 ){
        alert('Enter a number between 0 and 100')
        gridRow = prompt("Enter a row number less than 100:");
        parseInt(gridRow);       
    } else {
        makeSquareGrid(gridRow, gridRow)
    }
    
}

