class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    //car1.addImage(playerImg)
    car2 = createSprite(100,400);
    //car2.addImage(playerImg)
    //car3 = createSprite(100,200);
    //car3.addImage(playerImg)
    cars = [car1, car2]
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    
    background("floralwhit")
    var title2 = createElement('h3')
    title2.html("You are Playing as the Blue Car")
    title2.position(displayWidth/2 - 100, 50)

    if(allPlayers !== undefined){
      var index = 0
      var x 
      var y = 0
      cars[1].addImage(car2Img)
      cars[1].velocityX = 20
      for(var plr in allPlayers){
        index ++
        y += 200
        x = displayHeight + allPlayers[plr].distance
        cars[index-1].x = x 
        cars[index-1].y = y
        if (plr === "player" + player.index){
          //cars[index-1].shapeColor = "red"
          camera.position.y = displayHeight/2
          camera.position.x = cars[index-1].x 
          cars[index-1].addImage(car1Img)
        }else{
          //cars[index-1].shapeColor = "black"
          cars[index-1].addImage(car2Img)
        }
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}