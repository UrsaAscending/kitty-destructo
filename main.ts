namespace SpriteKind {
    export const Robot = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const Witch = SpriteKind.create()
    export const Shark = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Witch, function (sprite, otherSprite) {
    info.changeScoreBy(-4)
    scene.cameraShake(4, 500)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shark, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    scene.cameraShake(1, 500)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . b b b b . . 
        . b 5 3 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Robot, function (sprite, otherSprite) {
    info.changeScoreBy(-2)
    scene.cameraShake(2, 500)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Tree, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(3)
    sprite.startEffect(effects.trail)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Witch, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(4)
    sprite.startEffect(effects.trail)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Robot, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
    sprite.startEffect(effects.trail)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tree, function (sprite, otherSprite) {
    info.changeScoreBy(-3)
    scene.cameraShake(3, 500)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Shark, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    sprite.startEffect(effects.trail)
})
let enemySprite: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(2)
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(25)) {
        enemySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 5 9 9 9 9 5 . . . . . . . 
            . . . . . 9 9 . . . . . . . . . 
            . . . . e e e e . . . . . . . . 
            . . . . e 5 5 e . . . . . . . . 
            . . 9 9 e 5 5 e 9 9 . . . . . . 
            . . 9 . e e e e . 9 . . . . . . 
            . . 5 . 3 3 3 3 . 5 . . . . . . 
            . . . . 3 3 3 3 . . . . . . . . 
            . . 3 3 3 3 3 3 3 3 . . . . . . 
            . . 3 . . . . . . 3 . . . . . . 
            . 3 3 3 . . . . 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Robot)
    } else if (Math.percentChance(25)) {
        enemySprite = sprites.create(img`
            . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 5 e e 5 . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 2 e e 2 . . . . . . 
            . . . . . . e 2 2 e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            `, SpriteKind.Tree)
    } else if (Math.percentChance(25)) {
        enemySprite = sprites.create(img`
            ........................
            ..........f.............
            .........fff............
            ........fffff...........
            .......fffffff..........
            ......fffffffff.........
            ........44444...........
            ........44444...........
            ........54445...........
            ........44444...........
            ..4444..42224..4444.....
            .....4..42224..4........
            ...5.44444444444.5......
            .....4..44444..4........
            ..4444..44444..4444.....
            ........44444...........
            ........44444...........
            .......4444444..........
            .......4.....4..........
            .......4.....4..........
            .......4.....4..........
            ......444...444.........
            ........................
            ........................
            `, SpriteKind.Witch)
    } else {
        enemySprite = sprites.create(img`
            ....................................
            ....................................
            ....................................
            ...............ccffff...............
            ..............cddbbbf...............
            .......ffffffcddbbbf................
            .....ffbbbbbbbbbbbbbcfff.......ccccc
            ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
            ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
            .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
            .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
            .ffbb1111fffbbcbbbbcccccccbcffbccf..
            ..ff111111111bbbbccccccbbbcc..fbbcf.
            ....ccccccc111bdbbbfddbccc.....ffbbf
            ........ccccccfbdbbbfcc..........fff
            ...............ffffff...............
            `, SpriteKind.Shark)
    }
    enemySprite.setPosition(randint(160, 170), randint(0, 120))
    enemySprite.setVelocity(-50, 0)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
