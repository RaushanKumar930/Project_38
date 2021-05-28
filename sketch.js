var  database
var gameState = 0
var playerCount
var form, player, game
var allPlayers, car1, car2, car3, car4
var playerImg, car1Img, car2Img
var cars = []

function preload() {
    car1Img = loadImage("topCar1.jpg")
    car2Img = loadImage("topCar2.png")
}
function setup(){
    createCanvas(displayWidth-20 ,displayHeight-30);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start()
}

function draw(){
    background("ivory")
    if(gameState === 0){
        textSize(20)
        fill(0,0,0)
        stroke(0,0,0)
        text("This is a Two Player Game",displayWidth/2 - 80,100)
        text("Use the Right Arrow to move your car",displayWidth/2 - 120,150)
    }
    if(playerCount === 1){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play()
    }
}


