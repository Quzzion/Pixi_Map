console.log("background.js is ready");
const app = new PIXI.Application({ 
	width:2878,height:2639 
});
/*************************设置背景图片********************************/ 
const jsContainer = document.querySelector(".jsContainer");
// jsContainer.appendChild(app.view);
document.body.appendChild(app.view);
const container = new PIXI.Container();
const background = PIXI.Sprite.from('images/background1.jpg');
background.width = app.screen.width;
background.height = app.screen.height;
container.addChild(background);
app.stage.addChild(container);

app.stage.sortableChildren = true;			