var canvas, backgroundImage;

var gameState1 = 0;
var playerCount1 = 0;
var allPlayers
var database;

var form, player, game;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  //form = new Form();
  //form.display();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  /*
  if(playerCount1 === 4){
    game.update(1);
  }
  if(gameState1 === 1){
    //clear();
    //game.play();
    
  }
  
  if(gameState === 2){
    game.end();

  }
  */

}