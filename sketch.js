var player, player_img;
var border1, border2, border3, border4;
var barrier1, barrier2, barrier3, barrier4, barrier5, barrier6, barrier7, barrier8, barrier9,
barrier10, barrier11, barrier12, barrier13, barrier14, barrier15,barrier16,barrier17;
var bg_image; 
var paddle,paddle2;
var block,block2;
var power1,power1_img;
var power2;
var stone, stone_img;
var monster1,monster1_img, monster2, monster2_img;

function preload(){
    player_img = loadImage("images/boy running.gif");
    bg_image = loadImage("images/bg.jpg");
    power1_img = loadImage("images/power up.png");
    stone_img = loadImage("images/stone.png");
    monster1_img = loadImage("images/monster1.png");
    monster2_img = loadImage("images/monster2.png");
    

}


function setup(){
    var canvas = createCanvas(1600,780);

    

    border1 = createSprite(30,380,10,700);
    border1.shapeColor = "black";
    border2 = createSprite(800,30,1550,10);
    border2.shapeColor = "black";
    border3 = createSprite(1570,380,10,700);
    border3.shapeColor = "black";
    border4 = createSprite(800,735,1550,10);
    border4.shapeColor = "black";

    

     barrier1 = createSprite(180,450, 300, 10);
     barrier1.shapeColor = "black";
     barrier2 = createSprite(330, 660, 10, 150);
     barrier2.shapeColor = "black";
     barrier3 = createSprite(570,590,480,10);
     barrier3.shapeColor = "black";
     barrier4 = createSprite(805,520,10,250);
     barrier4.shapeColor = "black";
     barrier5 = createSprite(325,380, 10,150);
     barrier5.shapeColor = "black";
     barrier6 = createSprite(550,300,250,10);
     barrier6.shapeColor = "black";
     barrier7 = createSprite(675,270,10,70);
     barrier7.shapeColor = "black";
     barrier8 = createSprite(710,235,80,10);
     barrier8.shapeColor = "black";  
     barrier9 = createSprite(747,270,10,75);
     barrier9.shapeColor = "black";
     barrier10 = createSprite(900,400,200,10);
     barrier10.shapeColor = "black";
     barrier11 = createSprite(1000,505,10,220);
     barrier11.shapeColor = "black";
     barrier12 = createSprite(1130,327,10,585);
     barrier12.shapeColor = "black";
     barrier13 = createSprite(1325,560,10,350);
     barrier13.shapeColor = "black";
     barrier14 = createSprite(1270,490,110,10);
     barrier14.shapeColor = "black";
     barrier15 = createSprite(1250,180,10,300);
     barrier15.shapeColor = "black";
     barrier16 = createSprite(1400,180,10,300);
     barrier16.shapeColor = "black";
     

    //  paddle
    paddle = createSprite(350,300,75,10);
    paddle.shapeColor = "black";
    paddle.velocityX = -5;

    // block
    block = createSprite(280,300,10,75);
    block.shapeColor = "black";
    block2 = createSprite(300, 333, 50,10);
    block2.shapeColor = "black";

    // trap 2
    paddle2 = createSprite(1025,610,85,10);
    paddle2.shapeColor = "black";
    paddle2.velocityX = -8;

    // power ups
    power1 = createSprite(715,280,20,20);
    power1.addImage("power1", power1_img);
    power1.scale = 0.15;

    power2 = createSprite(1275,535,10,10);
    power2.addImage("power2",power1_img);
    power2.scale = 0.15;

    // monsters
     monster1 = createSprite(570,655,10,10);
     monster1.addImage("monster1", monster1_img);
     monster1.scale = 0.25;

    monster2 = createSprite(545,350,10,10);
    monster2.addImage("monster2", monster2_img);
    monster2.scale = 0.5;
       


}



function draw(){

    background(bg_image);

    player = createSprite(100,670);
    player.addImage("player", player_img);
    player.scale = 0.50;
    
    if(keyDown("UP")){
        player.y -= 5;

    }

    if(keyDown("RIGHT")){
        player.x += 5;
    }

    if(keyDown("LEFT")){
        player.x -= 5;
    }

    if(keyDown("DOWN")){
        player.y += 5;
    }

    paddle.bounceOff(block);
    paddle.bounceOff(barrier6);

    paddle2.bounceOff(barrier4);
    paddle2.bounceOff(barrier12);

    

    drawSprites();
    fallingObstacles();

}

function fallingObstacles(){
    if(World.frameCount % 100 === 0){

        stone = createSprite(random(50,1600), 0, 10,10);
        stone.addImage("stone", stone_img);
        stone.scale = 0.15;
        stone.velocityY = 10;


    }
    
}
