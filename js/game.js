class Game {
    constructor(){
        this.startScreen = document.getElementById
        ('game-intro')
        this.gameScreen = document.getElementById
        ('game-screen')
        this.gameEndScreen = document.getElementById
        ('game-end')
        this.height = 600
        this.width = 500
        this.player = new Player(this.gameScreen)
    }

    start() {
        this.gameScreen.style.width = `${this.width}px` 
        this.gameScreen.style.height = `${this.height}px`

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
    }

    gameLoop(){
        this.update()

        requestAnimationFrame(() => this.gameLoop())
    }
    
    update(){
        console.log('Update')
        this.player.move()
    }

}