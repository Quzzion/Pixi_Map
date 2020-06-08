/********************创建云图层*****************/
const cloud1 = PIXI.Sprite.from('images/cloud1.png');
cloud1.x = 2100;
cloud1.y = 2085;
cloud1.zIndex = 80;
cloud1.direction =Math.PI * 2/4;
cloud1.turningSpeed =0;
// create a random speed for the dude between 0 - 2
cloud1.speed = 0.2;
app.stage.addChild(cloud1);
// ******************创建cloud2*******************
const cloud2 = PIXI.Sprite.from('images/cloud2.png');
cloud2.x = 1000;
cloud2.y = 1300;
cloud2.zIndex = 80;
cloud2.direction =Math.PI * 2/4;
cloud2.turningSpeed =0;
// create a random speed for the dude between 0 - 2
cloud2.speed = 0.6;
app.stage.addChild(cloud2);
// ******************创建cloud4*******************
const cloud4 = PIXI.Sprite.from('images/cloud4.png');
cloud4.x = 2000;
cloud4.y = 1000;
cloud4.zIndex = 80;
cloud4.direction =Math.PI * 2/4;
cloud4.turningSpeed =0;
// create a random speed for the dude between 0 - 2
cloud4.speed = 0.5;
app.stage.addChild(cloud4);
// **************创建cloud1的运动框架*********************/
const cloud1box = new PIXI.Rectangle(
    cloud1.x,cloud1.y,700,200
);
// **************创建cloud2的运动框架*********************/
const cloud2box = new PIXI.Rectangle(
    cloud2.x,cloud2.y,700,200
);
// **************创建cloud2的运动框架*********************/
const cloud4box = new PIXI.Rectangle(
    cloud4.x,cloud4.y,700,200
);
/******************创建云的运动***********************/
app.ticker.add(() => {
        //*****************cloud1********* */
        cloud1.x += Math.sin(cloud1.direction) * cloud1.speed;
        cloud1.y += Math.cos(cloud1.direction) * cloud1.speed;

        if (cloud1.x < cloud1box.x || cloud1.x+cloud1.width>cloud1box.x+cloud1box.width) {
            cloud1.direction = -cloud1.direction;
        }
        // *********************cloud2***************
        cloud2.x += Math.sin(cloud2.direction) * cloud2.speed;
        cloud2.y += Math.cos(cloud2.direction) * cloud2.speed;
        
        if (cloud2.x < cloud2box.x || cloud2.x+cloud2.width>cloud2box.x+cloud2box.width) {
            cloud2.direction = -cloud2.direction;
        }
        // *********************cloud4***************
        cloud4.x += Math.sin(cloud4.direction) * cloud4.speed;
        cloud4.y += Math.cos(cloud4.direction) * cloud4.speed;
        
        if (cloud4.x < cloud4box.x || cloud4.x+cloud4.width>cloud4box.x+cloud4box.width) {
            cloud4.direction = -cloud4.direction;
        }

});
