
/************************设置P2-1小岛高光***************************/
const P2highlight = PIXI.Sprite.from('images/P2highlight.png');
P2highlight.width = 752;
P2highlight.height = 482;
P2highlight.x = 410;
P2highlight.y = 653;
P2highlight.visible = true;
P2highlight.zIndex = 75;
P2highlight.alpha = 0;
app.stage.addChild(P2highlight);
/**********************设置P2-2的小岛高光****************************/
const P2_2highlight = PIXI.Sprite.from('images/P2_2highlight.png');
P2_2highlight.width = 502;
P2_2highlight.height = 510;
P2_2highlight.x = 328;
P2_2highlight.y = 1075;
P2_2highlight.visible = true;
P2_2highlight.alpha = 0;
P2_2highlight.zIndex = 75;
app.stage.addChild(P2_2highlight); 
/**********************设置P2-3的小岛高光****************************/
const P2_3highlight = PIXI.Sprite.from('images/P2_3highlight.png');
P2_3highlight.width = 652;
P2_3highlight.height = 455;
P2_3highlight.x = 611;
P2_3highlight.y = 1271;
P2_3highlight.visible = true;
P2_3highlight.alpha = 0;
P2_3highlight.zIndex = 75;
app.stage.addChild(P2_3highlight); 
/**********************设置P2-4的小岛高光****************************/
const P2_4highlight = PIXI.Sprite.from('images/P2_4highlight.png');
P2_4highlight.width = 807;
P2_4highlight.height = 444;
P2_4highlight.x = 569;
P2_4highlight.y = 973;
P2_4highlight.visible = true;
P2_4highlight.alpha = 0;
P2_4highlight.zIndex = 75;
app.stage.addChild(P2_4highlight); 
/****************************确定shapeP2_1的形状************************/
let shape = new PIXI.Graphics();
      shape.beginFill(0xffffff,0.01);
      // shape.lineStyle(2, '#000000');
      let pathArr = getPathPoints(pathStrP2_1);
      highlightMask(pathArr,shape);
      shape.closePath();
      shape.scale.set(1.82);
      shape.x = 406;
      shape.y = 650;
      shape.zIndex = 76;
// ***************************确定shapeP2_2的形状***********************
let shapeP2_2 = new PIXI.Graphics();
      shapeP2_2.beginFill(0xffffff,0.01);
      // shapeP2_2.lineStyle(2, '#000000');
      let pathArrP2_2 = getPathPoints(pathStrP2_2);
      highlightMask(pathArrP2_2,shapeP2_2);
      shapeP2_2.closePath();
      shapeP2_2.scale.set(1.82);
      shapeP2_2.x = 335;
      shapeP2_2.y = 1077;
      shapeP2_2.zIndex = 76;
// ***************************确定shapeP2_3的形状***********************
let shapeP2_3 = new PIXI.Graphics();
      shapeP2_3.beginFill(0xffffff,0.01);
      // shapeP2_3.lineStyle(2, '#000000');
      let pathArrP2_3 = getPathPoints(pathStrP2_3);
      highlightMask(pathArrP2_3,shapeP2_3);
      shapeP2_3.closePath();
      shapeP2_3.scale.set(1.82);
      shapeP2_3.x = 466;
      shapeP2_3.y = 738;
      shapeP2_3.zIndex = 76;
// ***************************确定shapeP2_4的形状***********************
let shapeP2_4 = new PIXI.Graphics();
      shapeP2_4.beginFill(0xffffff,0.01);
      // shapeP2_4.lineStyle(2, '#000000');
      let pathArrP2_4 = getPathPoints(pathStrP2_4);
      highlightMask(pathArrP2_4,shapeP2_4);
      shapeP2_4.closePath();
      shapeP2_4.scale.set(1.82);
      shapeP2_4.x = 466;
      shapeP2_4.y = 738;
      shapeP2_4.zIndex = 76;
/**********************设置shapeP2_1的动作**********************/
      let flag1 = false;
      shape.interactive = false;
      shape.buttonMode = false;
      shape.on("mouseover",function(){
      //  P2highlight.visible = true;
      flag1 = true;
      });
      shape.on("mouseout",function(){
      //  P2highlight.visible = false;
      flag1 = false;
      });
      shape.endFill();
      app.stage.addChild(shape);

/**********************设置shapeP2_2的动作**********************/
      let flag2 = false;
      shapeP2_2.interactive = false;
      shapeP2_2.buttonMode = false;
      shapeP2_2.on("mouseover",function(){
            flag2 = true;
      	// P2_2highlight.visible = true;
      });
      shapeP2_2.on("mouseout",function(){
            flag2 = false;
      	// P2_2highlight.visible = false;
      });
      shapeP2_2.endFill();
      app.stage.addChild(shapeP2_2);
/**********************设置shapeP2_3的动作**********************/
      let flag3 = false;
      shapeP2_3.interactive = false;
      shapeP2_3.buttonMode = false;
      shapeP2_3.on("mouseover",function(){
      //  P2_3highlight.visible = true;
      flag3 = true;
      });
      shapeP2_3.on("mouseout",function(){
            flag3 = false;
      //  P2_3highlight.visible = false;
      });
      shapeP2_3.endFill();
      app.stage.addChild(shapeP2_3);
/**********************设置shapeP2_4的动作**********************/
      let flag4 = false;
      shapeP2_4.interactive = false;
      shapeP2_4.buttonMode = false;
      shapeP2_4.on("mouseover",function(){
      //  P2_4highlight.visible = true;
      flag4 = true;
      });
      shapeP2_4.on("mouseout",function(){
            flag4 = false;
      //  P2_4highlight.visible = false;
      });
      shapeP2_4.endFill();
      app.stage.addChild(shapeP2_4);


      // background.mask = shape;
