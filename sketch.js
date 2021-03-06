const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2;
// var box1;
var polyogn1;





function setup()
{
     var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


 ground1 = new Ground(450,400,300,30);

 ground2 = new Ground(800,300,300,15);

 polygon1 = new Polygon(100,300,50);
 console.log("polygon "+polyogn1);

// 1st row of boxes
 box1 = new Box(340,365,30,40);
 box2 = new Box(370,365,30,40);
 box3 = new Box(400,365,30,40);
 box4 = new Box(430,365,30,40);
 box5 = new Box(460,365,30,40);
 box6 = new Box(490,365,30,40);
 box7 = new Box(520,365,30,40);
 box8 = new Box(550,365,30,40);
 
//  2nd row of boxes
box9 = new Box(370,325,30,40);
box10 = new Box(400,325,30,40);
box11 = new Box(430,325,30,40);
box12 = new Box(460,325,30,40);
box13 = new Box(490,325,30,40);
box14 = new Box(520,325,30,40);

// 3rd row of boxes
box15 = new Box(400,285,30,40);
box16 = new Box(430,285,30,40);
box17 = new Box(460,285,30,40);
box18 = new Box(490,285,30,40);

// 4th row of boxes
box19 = new Box(430,245,30,40);
box20 = new Box(460,245,30,40);

// 5th row of boxes
box21 = new Box(445,205,30,40);


// 1st row of boxes
box22 = new Box(700,273,30,40);
box23 = new Box(730,273,30,40);
box24 = new Box(760,273,30,40);
box25 = new Box(790,273,30,40);
box26 = new Box(820,273,30,40);
box27 = new Box(850,273,30,40);
box28 = new Box(880,273,30,40);
box29 = new Box(910,273,30,40);

// 2nd row of boxes
box30 = new Box(730,233,30,40);
box31 = new Box(760,233,30,40);
box32 = new Box(790,233,30,40);
box33 = new Box(820,233,30,40);
box34 = new Box(850,233,30,40);
box35 = new Box(880,233,30,40);

// 3rd row of boxes
box36 = new Box(760,193,30,40);
box37 = new Box(790,193,30,40);
box38 = new Box(820,193,30,40);
box39 = new Box(850,193,30,40);

// 4th row of boxes
box40 = new Box(790,153,30,40);
box41 = new Box(820,153,30,40);

// 5th row of boxes
box42 = new Box(805,113,30,40);

slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw()
{
    background("white");

    ground1.display();
    ground2.display();

   

    push();
    fill("lightblue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    pop();


    push();
    fill("lightpink")
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    pop();

    push();
    fill("yellow");
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    pop();

    push();
    fill("lime");
    box19.display();
    box20.display();
    pop();


    box21.display();

    push();
    fill("brown");
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    pop();

    push();
    fill("darkblue");
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    pop();

    push();
    fill("orange");
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    pop();

    push();
    fill("darkgreen")
    box40.display();
    box41.display();
    pop();

    push();
    fill("cyan");
    box42.display();
    pop();

     polygon1.display();

     slingshot.display();



   drawSprites();

}




















