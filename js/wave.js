const wave = PIXI.Texture.from('images/wave1.png');
const tilingSprite = new PIXI.TilingSprite(wave,120,30);
tilingSprite.position.set(860,1778);
tilingSprite.zIndex = 79;
app.ticker.add(() => {
    tilingSprite.tilePosition.y += 0.2;
});
app.stage.addChild(tilingSprite);