console.log("ok");
var testObj = {
    scale: 1.00,
    x: 20,
    y: 30,
};

const app = new PIXI.Application({
	backgroundColor:0x1099bb
});
document.body.appendChild(app.view);
const texture = PIXI.Texture.from('cloud.png');
const cloud = new PIXI.Sprite(texture);
cloud.x = 500;
cloud.y = 500;
cloud.interactive = true;
cloud.buttonMode = true;
cloud.anchor.set(0.5);
cloud.scale.set(1);
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
  console.log("x："+cloud.scale.x);
  console.log(scaleSize);
  cloud.scale.set(scaleSize);
  cloud.x = testObj.x;
  cloud.y = testObj.y;
  testObj.x = cloudx;
  testObj.y = cloudy;
};

update();
app.stage.addChild(cloud);