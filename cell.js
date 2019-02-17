class Cell {
    constructor(x,y,size) {
       this.x = x; 
       this.y = y; 
       this.size = size;
       this.col = "#123654";
    }

    show = () => {
        fill(this.col)
        rect(this.x,this.y,this.size,this.size);
    }

    clicked = () => {
        let d = dist(mouseX, mouseY, this.x+this.size/2, this.y+this.size/2);
        if(d<=this.size/2) {
            this.col = "#fff";
            console.log("Click")
        }
    }
}