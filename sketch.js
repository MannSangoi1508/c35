//Create variables here
var  dog; 
var database;
var foodS, foodStock;
var dogImage,happyDogImage;
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500,500);
  dog=createSprite(250,250,30,30);
  dog.addImage(dogImage);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
    //add styles here
    food=food;
text("food remaining :" +foodS,170,200);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
food:x
    
  })
}



