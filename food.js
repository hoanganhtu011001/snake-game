class food {
    constructor(game,row, col) {
        this.game = game;
        this.row = row;
        this.col = col;
        this.size = 20;
        this.randomPosition();
        this.draw();
    }

    draw() {
        var x = this.col*20;
        var y = this.row*20;
        this.game.context.fillStyle = '#F05023';
        this.game.context.fillRect(x + 1, y + 1, this.size - 2, this.size - 2);
    }

    randomPosition(){
        let x =  Math.round(Math.random()*19)
        let y =  Math.round(Math.random()*19)
        let check = true;
        for(let i = 0; i < this.game.sn.dots.length; i++){
            if(this.game.sn.dots[i].row == x && this.game.sn.dots[i].col == y){
                check = false;
            }
        }
        if(check){
            this.row = x;
            this.col = y;
        }
        else{
            this.randomPosition();
        }
        console.log(x, y);
    }
    
}