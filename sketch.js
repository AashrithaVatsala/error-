var database;
var player;
var form;
var game;
var PlayerCount = 0;
var gameState = 0;
var chefImage;

function preload(){

  chefImage = loadImage("images/chef.jpg");

}

function setup() {
  createCanvas(800,700);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(255,255,255);  
}