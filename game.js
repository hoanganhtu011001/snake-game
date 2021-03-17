class game {
    constructor(){
        this.canvas = null;
        this.context = null;
        this.score = 0;
        this.mouse = 'r';
        this.init();
    }

    init(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        this.context.fillStyle = '#282C34';
        this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        document.body.appendChild(this.canvas);
        this.sn = new snake(this);
        this.f = new food(this)
        this.loop();
    }

    loop(){
        this.controlSnake();
        if(this.mouse == 'r'){
            this.sn.moveRight();
        }
        else if(this.mouse == 'l'){
            this.sn.moveLeft();
        }
        else if(this.mouse == 'd'){
            this.sn.moveDown();
        }
        else if(this.mouse == 'u'){
            this.sn.moveUp();
        }
        this.sn.endGame();
        this.draw();
        this.sn.eatFood();
        this.sn.outBox();
        document.getElementById('score').innerHTML = 'Score: ' + this.score;
        setTimeout(() => this.loop(), 100);
    }

    draw(){
        this.sn.draw();
    }

    controlSnake() {
        document.addEventListener("keydown", (event) => {
            if(event.code == "ArrowLeft" && this.mouse !== "r"){
                this.mouse = 'l';
            }
            else if(event.code == "ArrowRight" && this.mouse !== "l"){
                this.mouse = 'r';
            }
            else if(event.code == "ArrowUp" && this.mouse !== "d"){
                this.mouse = 'u';
            }
            else if(event.code == "ArrowDown" && this.mouse !== "u"){
                this.mouse = 'd';
            }
        });
    }
}



var g = new game();