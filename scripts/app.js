function init() {
    
    function createGrid() {
        const gridElem = document.querySelector(".grid");

        const cells = [];
        const gridWidth = 10;
        const numberOfCells = gridWidth * gridWidth;

        // for every cell, create a div, then append this cell to our grid
        for(let i=1; i<=numberOfCells; i++) {
            const cell = document.createElement('div');
            cell.classList.add('duck');
            cell.textContent = i;
            cells.push(cell);
            gridElem.appendChild(cell);
        }

        console.log(cells);
    }

    createGrid();
}

document.addEventListener('DOMContentLoaded', init);