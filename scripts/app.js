function init() {
    
    function createGrid() {
        const gridElem = document.querySelector(".grid");

        // for every cell, create a div, then append this cell to our grid
        for(let i=0; i<100; i++) {
            const cell = document.createElement('div');
            cell.textContent = i;
            gridElem.appendChild(cell);
        }
    }

    createGrid();
}

document.addEventListener('DOMContentLoaded', init);