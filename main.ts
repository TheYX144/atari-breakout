namespace SpriteKind {
    export const PhysicsEnabled = SpriteKind.create()
    export const hidden = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.PhysicsEnabled, SpriteKind.Player, function (sprite, otherSprite) {
    moveRandom(PingPong_Ball)
})
function moveRandom (mySprite: Sprite) {
    mySprite.setVelocity(randint(-100, 100), randint(-100, 0))
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
PingPong_Ball.setVelocity(0, 53)
