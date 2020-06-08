
let shape = new PIXI.Graphics();
      shape.beginFill(0xff3300);
      shape.lineStyle(2, '#000000');
      let pathArr = getPathPoints();

      pathArr.forEach((path) => {
        // 画图
        if (path.type === 'm' || path.type === 'M') {
          shape.moveTo(path.points[0][0], path.points[0][1]);
        } else if (path.type.toLowerCase() === 'l') {
          shape.lineTo(path.points[0][0], path.points[0][1]);
        } else if (path.type.toLowerCase() === 's') {
          shape.quadraticCurveTo(
            path.points[0][0],
            path.points[0][1],
            path.points[1][0],
            path.points[1][1]
          );
        } else if (path.type.toLowerCase() === 'c') {
          shape.bezierCurveTo(
            path.points[0][0],
            path.points[0][1],
            path.points[1][0],
            path.points[1][1],
            path.points[2][0],
            path.points[2][1]
          );
        } else if (path.type === 'z') {
          shape.lineTo(pathArr[0].points[0][0], pathArr[0].points[0][1]);
        }
      });
      shape.closePath();
      shape.endFill();
      sprite.mask = shape;