const graphics = new PIXI.Graphics();
graphics.beginFill(0xDE3249);
graphics.drawRect(0, -400, 400, 500);
graphics.alpha = 0;
graphics.endFill();
container.addChild(graphics);
app.ticker.add(() => {
    graphics.alpha += 0.01;
});

const background1 = PIXI.Sprite.from('images/background1.jpg');
background1.width = app.screen.width;
background1.height = app.screen.height;
// app.stage.addChild(background1);
// container.mask = shapeP2Road;
