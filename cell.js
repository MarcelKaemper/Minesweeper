class Cell {
    constructor(x,y,size,color,text) {
       this.x = x; 
       this.y = y; 
       this.size = size;
       this.col = color;
       this.revealed = false;
       this.text = text;
    }

    show = () => {
        this.revealed?fill(this.col):fill(200)
        rect(this.x,this.y,this.size,this.size);
        fill(128);
        this.revealed?text(this.text,this.x+25,this.y+25):text("",0,0);
    }

    clicked = () => {
        let d = dist(mouseX, mouseY, this.x+this.size/2, this.y+this.size/2);
        if(d<=this.size/2) {
            if(this.text == "x"){
                alert("You lost!");
                location.reload();
            }
            this.revealed = true;
            console.log("Click")
        }
    }
}