var cells = [];

function setup() {
    createCanvas(600, 600);

    let gridSize = 8;
    let cellSize = 50;

    let field = [["x","1","0","0","0","0"],
                ["1","2","1","2","1","1"],
                ["0","1","x","2","x","1"],
                ["0","1","1","2","1","1"]];
    
    for(let i = 0; i<field.length; i++){
        for(let j = 0; j<field[i].length; j++){
            let color;
            if(field[i][j] == "x"){
                color = "#ff384b";
            }else if(field[i][j] == "0"){
                color = "#fff";
            }else{
                color = "#000";
            }
            let cell = new Cell(0+(cellSize*j),0+(cellSize*i), cellSize, color, field[i][j]);
            cells.push(cell);
        }
    }

    // for (var i = 0; i < gridSize; i++) {
    //     for (let j = 0; j < gridSize; j++) {
    //         let cell = new Cell(0+(cellSize*j),0+(cellSize*i), cellSize);
    //         cells.push(cell);
    //         console.log(cell);
    //     }
    // }
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