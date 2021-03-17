class dot {
    constructor(game, row, col) {
        this.game = game;
        this.size = 20;
        this.row = row;
        this.col = col;
    }

    draw() {
        var x = this.col * this.size;
        var y = this.row * this.size;
        this.game.context.fillStyle = '#50AFEF';
        this.game.context.fillRect(x + 1, y + 1, this.size - 2, this.size - 2);
    }

    moveRight(){
        this.col++;
        this.clear();
    }

    clear(){
        this.game.context.fillStyle = '#282C34';
        this.game.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
}