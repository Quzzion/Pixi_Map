const app = new PIXI.Application();
document.body.appendChild(app.view);

const background = PIXI.Sprite.from("images/sky.jpg");
background.width = 800;
background.height = 600;
app.stage.addChild(background);