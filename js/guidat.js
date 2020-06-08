console.log("ok");
var testObj = {
    scale: 1,
    x: 922,
    y: 1805,
};

const texture = PIXI.Texture.from('images/P2highlight.png');
/**请把样式放在此处**/
const cloud = tilingSprite;
/*请把样式放在此处**/
cloud.x = 922;
cloud.y = 1805;
cloud.anchor.set(0.5);
cloud.interactive = true;
cloud.buttonMode = true;
// cloud.anchor.set(0.5);
cloud.scale.set(0.5);
console.log("本语局已执行");
cloud.on('pointerdown', onDragStart)
     .on('pointerup', onDragEnd)
     .on('pointerupoutside', onDragEnd)
     .on('pointermove', onDragMove);

function onDragStart(event){
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}
function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}


var gui = new dat.GUI();
var f = gui.addFolder("样式控制");
f.add(testObj, "scale", 0.5, 2, 0.001).listen();
f.add(testObj, "x").listen();
f.add(testObj, "y").listen();
f.open();

var update = function() {
  requestAnimationFrame(update);
  var cloudx = cloud.x;
  var cloudy = cloud.y;
  var scaleSize = testObj.scale;
//   console.log(scaleSize);
  cloud.scale.set(scaleSize);
  cloud.x = testObj.x;
  cloud.y = testObj.y;
  testObj.x = cloudx;
  testObj.y = cloudy;
};

update();
app.stage.addChild(cloud);