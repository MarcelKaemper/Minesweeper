class Cell {
    constructor(x,y,size,color,text) {
       this.x = x; 
       this.y = y; 
       this.size = size;
       this.col = color;
       this.text = text;
    }

    show = () => {
        fill(this.col)
        rect(this.x,this.y,this.size,this.size);
        fill(128);
        text(this.text,this.x+25,this.y+25);
    }

    clicked = () => {
        let d = dist(mouseX, mouseY, this.x+this.size/2, this.y+this.size/2);
        if(d<=this.size/2) {
            this.col = "#fff";
            console.log("Click")
        }
    }
}