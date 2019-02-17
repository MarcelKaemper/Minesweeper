var cells = [];

function setup() {
    createCanvas(600, 600);

    let gridSize = 8;
    let cellSize = 50;

    for (var i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let cell = new Cell(0+(cellSize*j),0+(cellSize*i), cellSize);
            cells.push(cell);
            console.log(cell);
        }
    }
}

function draw() {
    for(let i = 0; i<cells.length; i++){
        cells[i].show();
    }
}

mousePressed = () => {
    for(let i = 0; i<cells.length; i++){
        cells[i].clicked();
    }
}