function init() {
    const gridElem = document.querySelector(".grid");
    const scoreElem = document.querySelector(".score");
    const winElem = document.querySelector(".winText");
    const soundElem = document.querySelector(".clickSound");

    const cells = [];
    const gridWidth = 10;
    const numberOfCells = gridWidth * gridWidth;
    
    let duckPosition = 37;
    let score = 0;
    let totalDucks = 0;

    function addDuck() {
        cells[duckPosition].classList.add('duck');
        totalDucks++;
    }

    function removeDuck() {
        cells[duckPosition].classList.remove('duck');
    }

    function play() {
        setInterval(() => {
            if(totalDucks < 10) {
                removeDuck();
                duckPosition = Math.floor(Math.random() * numberOfCells);
                cells[duckPosition].classList.add('duck');
            }
            
        }, 1600);
    }

    function handleClick(event) {
        if(event.target.classList.contains('duck')) {
            score += 10;
            scoreElem.textContent = 'Score: '+score;
            soundElem.pause;
            soundElem.currentTime = 0;
            soundElem.play();

            if(score >= 100) {
                winElem.textContent = 'You win!';

                setTimeout(() => {
                    score = 0;
                    scoreElem.textContent = 'Score: 0';
                    winElem.textContent = '';
                }, 2000);
            }
        }
        
    }

    function createGrid() {
        // for every cell, create a div, then append this cell to our grid
        for(let i=1; i<=numberOfCells; i++) {
            const cell = document.createElement('div');
            // cell.classList.add('duck');
            cell.textContent = i;
            cell.addEventListener('click', handleClick);
            cells.push(cell);
            gridElem.appendChild(cell);
        }

        console.log(cells);
    }

    createGrid();
    play();
}

document.addEventListener('DOMContentLoaded', init);