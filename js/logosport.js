console.log("logosport.js is ready");
console.log("charm.js is ready");
let c = new Charm(PIXI);

let curveP2_part1 = [
    [[userlogo.x, userlogo.y], [593, 847],[596, 958], [574, 1014]],

    [[574, 1014],[517,1051],[448,1079],[408,1138]],
    [[408,1138],[408,1193],[428,1230],[446,1239]],//P2_2的点
    // [[446,1239],[472,1283],[506,1297],[540,1302]],
    // [[540,1302],[593,1309],[633,1342],[649,1393]],
    // [[649,1393],[670,1420],[702,1439],[737,1438]],//P2_3的点
    // [[737,1438],[798,1450],[858,1448],[918,1405]],
    // [[918,1405],[917,1312],[906,1226],[973,1165]],
    // [[973,1165],[973,1102],[938,1030],[894,1013]],
    // [[894,1013],[845,1003],[798,995],[760,966]]//P2_4的点
];
let curveP2_part2 = [
    [[446,1239],[472,1283],[506,1297],[540,1302]],
    [[540,1302],[593,1309],[633,1342],[649,1393]],
    [[649,1393],[670,1420],[702,1439],[737,1438]],//P2_3的点
];
let walkCurvePIXI =  c.walkCurve(
    userlogo, //需要移动的精灵
    curveP2_part1, //贝塞尔曲线数组
    300, //持续时间，以帧为单位
    "linear", //缓动类型
    // false, //yoyo
    // false,
    // 1000 //yoyo之前的延迟时间
   );
walkCurvePIXI.pause();
// c.pulse(userlogo,25,0.5);


var gameLoop = function() {
    requestAnimationFrame(gameLoop);
    // state();
    c.update();
    // renderer.render(stage);
}
gameLoop();

// let c1 = new Charm(PIXI);
// c.slide(dude, 128, 128, 120,"smoothstep", true);
// slidePxiie 是补间对象，包含有用的属性和方法，slide（）是沿着直线运动
// let slidePixie = c.slide(dude, 128, 128, 120,"smoothstep", true);
// 补间动画执行
// slidePixie.play();
// 补间动画停止
// slidePixie.pause();
/**
 *沿着贝塞尔曲线运动 调用followCurve方法
 *1.设置贝塞尔曲线的对应4个数组坐标
 let curve = [
    [userlogo.x, userlogo.y], //起始点
    [593, 847], //控制点1
    [596, 958], //控制点2
    [574, 1014] //结束点
    -----------------------
    [574, 1014], //起始点
    [502, 1055], //控制点1
    [596, 958], //控制点2
    [420, 1121] //结束点
------------------------
    [420, 1121], //起始点
    [450, 1161], //控制点1
    [411, 1222], //控制点2
    [447, 1237] //P2-2的点

];
2.设置方法
c.followCurve(
 sprite, //需要移动的精灵
 curve, //贝塞尔曲线数组
 120, //持续时间，以帧为单位
 "smoothstep", //缓动类型
 true, //yoyo
 1000 //yoyo之前的延迟时间
);
 */