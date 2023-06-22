window.addEventListener('load', () => {
  const startButton = document.getElementById('start-button')
  const restartButton = document.getElementById('restart-button')
let game

  function startGame(){
    console.log('start game');
    game = new Game()
    game.start()
    document.addEventListener('keydown', (event) => {
      const key = (event).key; 
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
      if(possibleKeystrokes.includes(key)){
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -10;
            break;
          case "ArrowUp":
            game.player.directionY = -10;
            break;
          case "ArrowRight":
            game.player.directionX = 10;
            break;
          case "ArrowDown":
            game.player.directionY = 10;
            break;
        }
        console.log(game.player.directionX, game.player.directionY)
        game.player.move()
      }
    })
    document.addEventListener('keyup', () => {
      game.player.directionX = 0 
      game.player.directionY = 0
      
    })
  }  

startButton.addEventListener('click', function () {
startGame()
})
})