namespace SpriteKind {
    export const PhysicsEnabled = SpriteKind.create()
    export const hidden = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.PhysicsEnabled, SpriteKind.Player, function (sprite, otherSprite) {
    moveRandom(PingPong_Ball)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.PhysicsEnabled, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
function moveRandom (mySprite: Sprite) {
    mySprite.setVelocity(randint(-100, 100), -50)
}
let PingPong_Ball: Sprite = null
let PlayerSpr = sprites.create(assets.image`PaddleTXTR`, SpriteKind.Player)
controller.moveSprite(PlayerSpr, 100, 0)
PlayerSpr.setStayInScreen(true)
PlayerSpr.setPosition(80, 100)
PingPong_Ball = sprites.create(assets.image`ballTXTR`, SpriteKind.PhysicsEnabled)
PingPong_Ball.setBounceOnWall(true)
let pingpongfollow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hidden)
PingPong_Ball.setVelocity(0, 50)
info.setLife(1)
info.setScore(0)
let deth1 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth1.setPosition(5, 110)
let deth2 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth2.setPosition(15, 110)
let deth3 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth3.setPosition(25, 110)
let deth4 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth4.setPosition(35, 110)
let deth5 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth5.setPosition(45, 110)
let deth6 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth6.setPosition(55, 110)
let deth7 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth7.setPosition(65, 110)
let deth8 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth8.setPosition(75, 110)
let deth9 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth9.setPosition(85, 110)
let deth10 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth10.setPosition(95, 110)
let deth11 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth11.setPosition(105, 110)
let deth12 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth12.setPosition(115, 110)
let deth13 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth13.setPosition(125, 110)
let deth14 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth14.setPosition(135, 110)
let deth15 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth15.setPosition(145, 110)
let deth16 = sprites.create(assets.image`dethTXTR`, SpriteKind.Enemy)
deth16.setPosition(155, 110)
