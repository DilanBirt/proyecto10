var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var vidas=0;
var sam = createSprite(20, 190,13,13);
var limite1 = createSprite(190, 120,420,3);
var limite2 = createSprite(190, 260,420,3);
var auto1 = createSprite(100, 130,10,10);
var auto2 = createSprite(215, 130,10,10);
var auto3 = createSprite(165, 250,10,10);
var auto4 = createSprite(270, 250,10,10);

sam.shapeColor="green";
auto1.shapeColor="red";
auto2.shapeColor="red";
auto3.shapeColor="red";
auto4.shapeColor="red";


auto1.velocityY=8;
auto2.velocityY=8;
auto3.velocityY=-8;
auto4.velocityY=-8;






function draw() {
background("white");
text("vidas: " +vidas, 200, 80);

fill("lightblue");
rect(0, 120, 52, 140);
fill("yellow");
        
rect(345, 120, 52, 140);
   auto1.bounceOff(limite1);
    auto1.bounceOff(limite2);
    auto2.bounceOff(limite1);
    auto2.bounceOff(limite2);
    auto3.bounceOff(limite1);
    auto3.bounceOff(limite2);
    auto4.bounceOff(limite1);
    auto4.bounceOff(limite2);
     
  if (keyDown("right")) {
    sam.x=sam.x+3;
  }
 if (keyDown("LEFT")) {
   sam.x=sam.x-3;
    
  }
if (sam.isTouching(auto1)) {
     sam.x=20;
     sam.y=190;
     vidas=vidas+1;
   }
if (sam.isTouching(auto2)) {
     sam.x=20;
     sam.y=190;
     vidas=vidas+1;
   }      
if (sam.isTouching(auto3)) {
     sam.x=20;
     sam.y=190;
     vidas=vidas+1;
   }  
if (sam.isTouching(auto4)) {
     sam.x=20;
     sam.y=190;
     vidas=vidas+1;
   }  
  
  
  
  
drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
