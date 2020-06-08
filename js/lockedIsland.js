console.log("lockedIsland.js is ready");
/************************设置P2-2小岛上锁效果***************************/
const P2_2lockedIsland = PIXI.Sprite.from('images/P2_2locked.png');
// P2_2lockedIsland.width = 574;
// P2_2lockedIsland.height = 603;
P2_2lockedIsland.x = 263;
P2_2lockedIsland.y = 1040;
P2_2lockedIsland.visible = true;
P2_2lockedIsland.zIndex = 77;
P2_2lockedIsland.interactive = false;
P2_2lockedIsland.buttonMode = true;
P2_2lockedIsland.on("pointerdown",function(){
    P2_2lockedIsland.visible = false;
    shapeP2_2.interactive = true;
    walkCurvePIXI.play();
    P2_3lockedIsland.interactive = true;
});
app.stage.addChild(P2_2lockedIsland);
/************************设置P2-3小岛上锁效果***************************/
const P2_3lockedIsland = PIXI.Sprite.from('images/P2_3locked.png');
// P2_3lockedIsland.width = 752;
// P2_3lockedIsland.height = 482;s
P2_3lockedIsland.x = 574;
P2_3lockedIsland.y = 1270;
P2_3lockedIsland.visible = true;
P2_3lockedIsland.zIndex = 77;
P2_3lockedIsland.interactive = false;
P2_3lockedIsland.buttonMode = true;
app.stage.addChild(P2_3lockedIsland);
P2_3lockedIsland.on("pointerdown",function(){
    P2_3lockedIsland.visible = false;
    shapeP2_3.interactive = true;
    P2_4lockedIsland.interactive = true;
});
/************************设置P2-4小岛上锁效果***************************/
const P2_4lockedIsland = PIXI.Sprite.from('images/P2_4locked.png');
// P2_4lockedIsland.width = 752;
// P2_4lockedIsland.height = 482;
P2_4lockedIsland.x = 570;
P2_4lockedIsland.y = 970;
P2_4lockedIsland.visible = true;
P2_4lockedIsland.zIndex = 77;
P2_4lockedIsland.interactive = false;
P2_4lockedIsland.buttonMode = true;
app.stage.addChild(P2_4lockedIsland);
P2_4lockedIsland.on("pointerdown",function(){
    P2_4lockedIsland.visible = false;
    shapeP2_4.interactive = true;
});