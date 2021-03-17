class snake {
    constructor(game) {
        this.game = game;
        this.size = 20;
        this.row = 0;
        this.col = 0;
        this.data = [
            [x, x, x]
        ];
        this.dots = [];
        this.createDots();
        this.draw();
    }

    createDots() {
        this.dots = [];
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[0].length; col++) {
                let d = new dot(this.game, row+this.row, col+this.col);
                this.dots.push(d);
            }
        }
    }

    draw() {
        this.dots.forEach(dot => {
            dot.draw();
        });
    }

    moveDown() {
        for(let i = 0; i < this.dots.length; i++){
            if(i == this.dots.length-1){
                this.dots[i] = new dot(this.game, this.dots[i].row+1,this.dots[i].col);
            }
            else{
                this.dots[i] = new dot(this.game, this.dots[i+1].row,this.dots[i+1].col);
            }
        }
        this.clear();
    }

    moveUp() {
        for(let i = 0; i < this.dots.length; i++){
            if(i == this.dots.length-1){
                this.dots[i] = new dot(this.game, this.dots[i].row-1,this.dots[i].col);
            }
            else{
                this.dots[i] = new dot(this.game, this.dots[i+1].row,this.dots[i+1].col);
            }
        }
        this.clear();
    }

    moveRight() {
        for(let i = 0; i < this.dots.length; i++){
            if(i == this.dots.length-1){
                this.dots[i] = new dot(this.game, this.dots[i].row,this.dots[i].col+1);
            }
            else{
                this.dots[i] = new dot(this.game, this.dots[i+1].row,this.dots[i+1].col);
            }
        }
        this.clear();
    }

    moveLeft() {
        for(let i = 0; i < this.dots.length; i++){
            if(i == this.dots.length-1){
                this.dots[i] = new dot(this.game, this.dots[i].row,this.dots[i].col-1);
            }
            else{
                this.dots[i] = new dot(this.game, this.dots[i+1].row,this.dots[i+1].col);
            }
        }
        this.clear();
    }

    endGame() {
        for(let i = 0; i < this.dots.length-1; i++){
            if(this.dots[this.dots.length-1].row == this.dots[i].row && this.dots[this.dots.length-1].col == this.dots[i].col){
                alert("Game over");
            }
        }
        
    }

    eatFood(){
        for(let i = 0; i < this.dots.length; i++){
            if(this.dots[i].row == this.game.f.row && this.dots[i].col == this.game.f.col){
                this.game.f.randomPosition();
                this.dots.unshift(new dot(this.game, this.dots[0].row-1, this.dots[0].col));
                this.game.score += 100;
            }
        }
    }

    outBox(){
        if(this.dots[this.dots.length-1].col > GAME_COL-1){
            this.dots[this.dots.length-1].col = 0;
        }
        if(this.dots[this.dots.length-1].col < 0){
            this.dots[this.dots.length-1].col = GAME_COL-1;
        }
        if(this.dots[this.dots.length-1].row > GAME_ROW-1){
            this.dots[this.dots.length-1].row = 0;
        }
        if(this.dots[this.dots.length-1].row < 0){
            this.dots[this.dots.length-1].row = GAME_ROW-1;
        }
    }

    clear() {
        this.game.context.fillStyle = '#282C34';
        this.game.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.game.f.draw();
    }

}