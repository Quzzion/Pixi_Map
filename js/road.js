
console.log("road.js is ready");
// ***************************确定P2road的形状***********************
let shapeP2Road = new PIXI.Graphics();
      shapeP2Road.beginFill(0x000000);
      // shapeP2Road.lineStyle(2, '#ffffff');
      let pathP2Road = getPathPoints(P2_pathRoad);
      highlightMask(pathP2Road,shapeP2Road);
      shapeP2Road.closePath();
      shapeP2Road.scale.set(1.84);
      shapeP2Road.x = 402;
      shapeP2Road.y = 864;
/**********************设置shapeP2Road的动作**********************/
      shapeP2Road.interactive = true;
      shapeP2Road.buttonMode = false;
      // shapeP2Road.on("mouseover",function(){
      // 	shapeP2Road.lineStyle(2, '#000000');
      // });
      // shapeP2Road.on("mouseout",function(){
      // 	shapeP2Road.lineStyle(2, '#ffffff');
      // });
      shapeP2Road.endFill();
      // shapeP2Road.position.set(container.width/2,container.height/2)
      // app.stage.addChild(shapeP2Road);
      
