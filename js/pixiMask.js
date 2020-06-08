// const app = new PIXI.Application({
// 	width:2878,height:2639
// });
// const jsContainer = document.querySelector(".jsContainer");
// jsContainer.appendChild(app.view);

// ********************设置背景********************
// const background = PIXI.Sprite.from('images/background1.jpg');
// background.width = app.screen.width;
// background.height = app.screen.height;
// app.stage.addChild(background);
/********************设置蒙层*********************/
const backgroundMask = new PIXI.Graphics();
backgroundMask.beginFill(0x000000,0.6);
backgroundMask.drawRect(0,0,app.screen.width,app.screen.height);
backgroundMask.endFill();
backgroundMask.zIndex = 100;
app.stage.addChild(backgroundMask);

/*******************第一个用户提示界面*******************/
const userGuideFirst = PIXI.Sprite.from("images/userGuide1.png");
// 设置新手引导的宽高以及锚点为中心
userGuideFirst.anchor.set(0.5);
userGuideFirst.width = 1751;
userGuideFirst.height = 1196;
// 设置新手引导的图片居中
userGuideFirst.x = app.screen.width/2;
userGuideFirst.y = app.screen.height/2+270;

/****************设置一个新手点击按钮，设置位置，颜色*******************/
const userGuideFirstButton = new PIXI.Graphics();
userGuideFirstButton.beginFill(0xffffff,0.01);
userGuideFirstButton.drawRect(1304,2100,330,86);
userGuideFirstButton.endFill();
userGuideFirstButton.interactive = true;
// 鼠标移动时显示指针光标
userGuideFirstButton.buttonMode = true;
/**********************第二个用户提示界面*********************/
const userGuideSecond  = PIXI.Sprite.from("images/userGuide2.png");
userGuideSecond.anchor.set(0.5);
userGuideSecond.width = 1172;
userGuideSecond.height = 1403;
userGuideSecond.x = app.screen.width/2;
userGuideSecond.y = app.screen.height/2+70;

userGuideSecond.visible = false;
/*********************设置第二个新手点击按钮***************************/
const userGuideSecondButton = new PIXI.Graphics();
userGuideSecondButton.beginFill(0xffffff,0.01);
userGuideSecondButton.drawRect(1275,2000,336,100);
userGuideSecondButton.endFill();
userGuideSecondButton.interactive = true;
userGuideSecondButton.buttonMode = true;

userGuideSecondButton.visible = false;
/**********************设置第三个用户提示页面*************************/
const userGuideThird = PIXI.Sprite.from("images/userGuide3.png");
userGuideThird.anchor.set(0);
userGuideThird.width = 989;
userGuideThird.height = 716;
userGuideThird.x = 687;
userGuideThird.y = 500;

userGuideThird.visible = false;
/**********************设置第三个新手操作按钮**********************/
const userGuideThirdButton = new PIXI.Graphics();
userGuideThirdButton.beginFill(0xffffff,0.01);
userGuideThirdButton.drawRect(1140,1120,336,100);
userGuideThirdButton.endFill();
userGuideThirdButton.interactive = true;
userGuideThirdButton.buttonMode = true;

userGuideThirdButton.visible = false;
/**********************设置第四个用户提示页面*************************/
const userGuideFourth = PIXI.Sprite.from("images/userGuide4.png");
userGuideFourth.anchor.set(0);
userGuideFourth.width = 1048;
userGuideFourth.height = 766;
userGuideFourth.x = 619;
userGuideFourth.y = 480;

userGuideFourth.visible = false;
/**********************设置第四个新手操作按钮**********************/
const userGuideFourthButton = new PIXI.Graphics();
userGuideFourthButton.beginFill(0xffffff,0.01);
userGuideFourthButton.drawRect(1140,1160,336,100);
userGuideFourthButton.endFill();
userGuideFourthButton.interactive = true;
userGuideFourthButton.buttonMode = true;
userGuideFourthButton.visible = false;


/****************************交互操作**********************************/
// 设置互动为真

userGuideFirstButton.on("pointerdown",function(){
	userGuideFirst.visible = false;
	userGuideFirstButton.visible = false;
	userGuideSecond.visible = true;
	userGuideSecondButton.visible = true;
});

userGuideSecondButton.on("pointerdown",function(){
	userGuideSecond.visible = false;
	userGuideSecondButton.visible = false;
	userGuideThird.visible = true;
	userGuideThirdButton.visible = true; 
});

userGuideThirdButton.on("pointerdown",function(){
	userGuideThird.visible = false;
	userGuideThirdButton.visible = false;
	userGuideFourth.visible = true;
	userGuideFourthButton.visible = true; 
});

userGuideFourthButton.on("pointerdown",function(){
	userGuideFourth.visible = false;
	userGuideFourthButton.visible = false;
	backgroundMask.visible = false;
	shape.interactive = true;
	userlogo.interactive = true;
	P2_2lockedIsland.interactive = true;
	c.pulse(userlogo,25,0.5);
});
userGuideFirst.zIndex = 101;
userGuideFirstButton.zIndex = 102;
userGuideSecond.zIndex = 101;
userGuideSecondButton.zIndex = 102;
userGuideThird.zIndex = 101;
userGuideThirdButton.zIndex = 102;
userGuideFourth.zIndex = 101;
userGuideFourthButton.zIndex = 102;

app.stage.addChild(userGuideFirst);
app.stage.addChild(userGuideFirstButton);
app.stage.addChild(userGuideSecond);
app.stage.addChild(userGuideSecondButton);
app.stage.addChild(userGuideThird);
app.stage.addChild(userGuideThirdButton);
app.stage.addChild(userGuideFourth);
app.stage.addChild(userGuideFourthButton);
