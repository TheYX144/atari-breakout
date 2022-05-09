let PlayerSpr = sprites.create(assets.image`PaddleTXTR`, SpriteKind.Player)
controller.moveSprite(PlayerSpr, 100, 0)
PlayerSpr.setStayInScreen(true)
PlayerSpr.setPosition(80, 100)
