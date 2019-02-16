function setup() {
    createCanvas(600, 600);
  }
  
function draw() {
    background(255);
    let gridSize = 8;
    let cellSize = 32;

    fill("#1111");
    let cells = [];

    for (var i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let cell = new Cell(0+(50*j),0+(50*i));
            cell.show();
            cells.push(cell);
        }
    }
}