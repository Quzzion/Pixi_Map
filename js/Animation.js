console.log("Animation.js 运行成功");
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    // container.rotation -= 0.01 * delta;
     
      // console.log(delta);
      if(flag1 == true){
        P2highlight.alpha += 0.05* delta;
      }else{
        P2highlight.alpha = 0;
      }
      if(flag2 == true){
        P2_2highlight.alpha += 0.05* delta;
      }else{
        P2_2highlight.alpha = 0;
      }
      if(flag3 == true){
        P2_3highlight.alpha += 0.05* delta;
      }else{
        P2_3highlight.alpha = 0;
      }
      if(flag4 == true){
        P2_4highlight.alpha += 0.05* delta;
      }else{
        P2_4highlight.alpha = 0;
      }
});