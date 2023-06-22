class Player {
constructor(gameScreen) {
    this.gameScreen = gameScreen
    this.width = 80 
    this.height = 150
    this.top = 470
    this.left = 170
    this.directionX = 0
    this.directionY = 0
    this.element = document.createElement('img')

    this.element.src = './images/car.png'
    this.element.style.position = 'absolute'

    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`

    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`

    this.gameScreen.appendChild(this.element)
}

move() {
    this.left += this.directionX;
    this.top += this.directionY;

    this.updatePosition();
}

updatePosition(){
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
}
}