namespace SpriteKind {
    export const PhysicsEnabled = SpriteKind.create()
    export const hidden = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const mean = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Block, function (sprite) {
    info.changeScoreBy(1)
    PingPong_Ball.setVelocity(randint(-50, 50), 50)
})
sprites.onOverlap(SpriteKind.PhysicsEnabled, SpriteKind.mean, function (sprite, otherSprite) {
    PingPong_Ball.setPosition(80, 60)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.PhysicsEnabled, SpriteKind.Player, function (sprite, otherSprite) {
    moveRandom(PingPong_Ball)
})
sprites.onOverlap(SpriteKind.PhysicsEnabled, SpriteKind.Block, function (sprite, otherSprite) {
    otherSprite.destroy()
})
info.onLifeZero(function () {
    game.over(false)
})
function moveRandom (mySprite: Sprite) {
    mySprite.setVelocity(randint(-50, 50), -50)
}
controller.combos.attachCombo("babb", function () {
    info.setLife(3)
})
let PingPong_Ball: Sprite = null
let PlayerSpr = sprites.create(assets.image`PaddleTXTR`, SpriteKind.Player)
controller.moveSprite(PlayerSpr, 100, 0)
PlayerSpr.setStayInScreen(true)
PlayerSpr.setPosition(80, 100)
PingPong_Ball = sprites.create(assets.image`ballTXTR`, SpriteKind.PhysicsEnabled)
PingPong_Ball.setBounceOnWall(true)
PingPong_Ball.setVelocity(0, 50)
info.setLife(3)
info.setScore(0)
let block1 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block1.setPosition(16, 16)
scaling.scaleByPixels(PingPong_Ball, -5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleByPixels(block1, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block2 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block2.setPosition(16, 32 + 16)
scaling.scaleByPixels(block2, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block3 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block3.setPosition(16 + 16 + 16, 16)
scaling.scaleByPixels(block3, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block4 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block4.setPosition(32 + 16, 32 + 16)
scaling.scaleByPixels(block4, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block5 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block5.setPosition(64 + 16, 16)
scaling.scaleByPixels(block5, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block6 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block6.setPosition(64 + 32 + 16, 16)
scaling.scaleByPixels(block6, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block7 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block7.setPosition(64 + 32 + 16, 32 + 16)
scaling.scaleByPixels(block7, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block8 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block8.setPosition(64 + 32 + 32 + 16, 16)
scaling.scaleByPixels(block8, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let block9 = sprites.create(assets.image`blockTXTR`, SpriteKind.Block)
block9.setPosition(64 + 32 + 32 + 16, 32 + 16)
scaling.scaleByPixels(block9, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let deth1 = sprites.create(assets.image`dethTXTR`, SpriteKind.mean)
deth1.setPosition(80, 108)
scaling.scaleToPixels(deth1, 160, ScaleDirection.Horizontally, ScaleAnchor.Middle)
game.onUpdate(function () {
    if (info.score() >= 9) {
        game.over(true)
    }
})
