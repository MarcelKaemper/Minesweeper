class Cell {
    constructor(x,y) {
       this.x = x; 
       this.y = y; 
    }

    show = () => {
        rect(this.x,this.y,50,50);
    }
}