var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
var base, leftSdide, rightSide;
var baseSprite, leftSideSprite, rightSideSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	baseSprite = createSprite(width / 2, 650, 200, 20);
	baseSprite.shapeColor = color(255, 0, 4);

	leftSideSprite = createSprite(300, 610, 20, 100);
	leftSideSprite.shapeColor = color(255, 0, 4);

	rightSideSprite = createSprite(500, 610, 20, 100);
	rightSideSprite.shapeColor = color(255, 0, 4);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, {
		restitution: 0,
		isStatic: true
	});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width / 2, 650, width, 10, {
		isStatic: true
	});
	World.add(world, ground);


	base = Bodies.rectangle(width / 2, 650, width, 10, {
		isStatic: true
	});
	World.add(world, base);

	leftSide = Bodies.rectangle(300, 650, width, 10, {
		isStatic: true
	});
	World.add(world, leftSide);

	rightSide = Bodies.rectangle(500, 650, width, 10, {
		isStatic: true
	});
	World.add(world, rightSide);

	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}