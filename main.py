PlayerSpr = sprites.create(assets.image("""
    paddleTxtr
"""), SpriteKind.player)
controller.move_sprite(PlayerSpr, 100, 0)
PlayerSpr.set_stay_in_screen(True)