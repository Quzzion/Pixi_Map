/*****上色******/

// 设置一个新的图层
const app = new PIXI.Application();
// 把图层添加到body标签里面去
document.body.appendChild(app.view);
// 设置一个标签来存放所有的外星人
const aliens = [];
// 设置外星人的总数为20
const totalDudes = 20;
// 创造外星人
for (let i = 0; i < totalDudes; i++) {
    // 创建一个新的精灵图片
    const dude = PIXI.Sprite.from('punny.jpg');

    // 设置锚点在精灵的中点，让纹理居中在精灵上
    dude.anchor.set(0.5);

    //为每个精灵设置一个随机大小。
    dude.scale.set(0.8 + Math.random() * 0.3);

    //设置每个精灵的的随机位置
    dude.x = Math.random() * app.screen.width;
    dude.y = Math.random() * app.screen.height;
    // 设置精灵的随机颜色
    dude.tint = Math.random() * 0xFFFFFF;

    // 创造额外的属性来控制运动
    // 以弧度创建随机方向，介于0~360度之间
    dude.direction = Math.random() * Math.PI * 2;

    // 随时间推移修改移动的方向
    dude.turningSpeed = Math.random() - 0.8;

    // create a random speed for the dude between 2 - 4
    dude.speed = 2 + Math.random() * 2;

    // finally we push the dude into the aliens array so it it can be easily accessed later
    aliens.push(dude);

    app.stage.addChild(dude);
}

// 精灵的移动创造边框
const dudeBoundsPadding = 100;
const dudeBounds = new PIXI.Rectangle(-dudeBoundsPadding,
    -dudeBoundsPadding,
    app.screen.width + dudeBoundsPadding * 2,
    app.screen.height + dudeBoundsPadding * 2);

app.ticker.add(() => {
    // 遍历并且更新精灵的位置
    for (let i = 0; i < aliens.length; i++) {
        const dude = aliens[i];
        dude.direction += dude.turningSpeed * 0.01;
        dude.x += Math.sin(dude.direction) * dude.speed;
        dude.y += Math.cos(dude.direction) * dude.speed;
        dude.rotation = -dude.direction - Math.PI / 2;

        // wrap the dudes by testing their bounds...
        if (dude.x < dudeBounds.x) {
            dude.x += dudeBounds.width;
        } else if (dude.x > dudeBounds.x + dudeBounds.width) {
            dude.x -= dudeBounds.width;
        }

        if (dude.y < dudeBounds.y) {
            dude.y += dudeBounds.height;
        } else if (dude.y > dudeBounds.y + dudeBounds.height) {
            dude.y -= dudeBounds.height;
        }
    }
});
