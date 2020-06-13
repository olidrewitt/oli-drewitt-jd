namespace SpriteKind {
    export const food_2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    junior_trophies.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    info.startCountdown(10)
    info.changeScoreBy(1)
    plate.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.food_2, function (sprite, otherSprite) {
    info.startCountdown(10)
    info.changeScoreBy(2)
    senior_trophies.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    plate.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
})
let plate: Sprite = null
let senior_trophies: Sprite = null
let junior_trophies: Sprite = null
scene.setBackgroundColor(13)
let Farrer_house = sprites.create(img`
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
7 7 7 7 7 7 7 7 f f f f f f f f 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
f f f f f f f f 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
controller.moveSprite(Farrer_house)
Farrer_house.setFlag(SpriteFlag.StayInScreen, true)
junior_trophies = sprites.create(img`
. . . 5 5 . . . 
. . 5 5 5 5 . . 
. 5 5 f f 5 5 . 
. 5 5 f f 5 5 . 
. 5 5 f f 5 5 . 
. 5 5 f f 5 5 . 
. . 5 5 5 5 . . 
. . . 5 5 . . . 
`, SpriteKind.Food)
senior_trophies = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f . . . 
. 5 5 5 5 5 8 8 5 5 5 5 5 . . . 
. . 5 5 5 8 2 2 8 5 5 5 . . . . 
. . . 5 8 2 2 2 2 8 5 . . . . . 
. . . . 5 8 2 2 8 5 . . . . . . 
. . . . . 5 f f 5 . . . . . . . 
. . . . . 5 f f 5 . . . . . . . 
. . . . . 5 f f 5 . . . . . . . 
. . . . . 5 f f 5 . . . . . . . 
. . . . . 5 f f 5 . . . . . . . 
. . . . . 5 f f 5 . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.food_2)
plate = sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Projectile)
plate.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
game.showLongText("help Farrer house win all the trophies to gain the golden fleur de lie once again", DialogLayout.Bottom)
