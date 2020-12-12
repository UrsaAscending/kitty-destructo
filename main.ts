namespace SpriteKind {
    export const Robot = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const Witch = SpriteKind.create()
    export const Shark = SpriteKind.create()
    export const Squid = SpriteKind.create()
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
function level1Boss () {
    if (!(bossSpawned)) {
        enemySprite = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            .........2222222................
            .........2222222................
            .........2552552................
            .........2552552................
            .........2222222................
            .........2222222................
            ...........222..................
            ...........222..................
            ...........222..................
            ...........222..................
            ...........222..................
            .........2222222................
            ...2222222222222222222..........
            ...2222222222222222222..........
            ...2222222222222222222..........
            ...22....2222222....22..........
            .........2222222................
            .....2222..222..2222............
            .....2552..222..2552............
            .....255222222222552............
            .....222222222222222............
            ...........222..................
            ...........222..................
            ......222..222..222.............
            ......252..222..252.............
            ......222..222..222.............
            ......2222222222222.............
            ......2222222222222.............
            `, SpriteKind.Squid)
        enemySprite.setPosition(128, 44)
        sprites.setDataNumber(enemySprite, "life", 13)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Tree, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "life", -1)
    if (sprites.readDataNumber(otherSprite, "life") == 0) {
        otherSprite.destroy()
        info.changeScoreBy(3)
        sprite.startEffect(effects.trail)
    } else {
        otherSprite.x += 50
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Squid, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "life", -1)
    if (sprites.readDataNumber(otherSprite, "life") == 0) {
        otherSprite.destroy()
        info.changeScoreBy(100)
        sprite.startEffect(effects.trail)
    }
})
function level1Enemies () {
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
        sprites.setDataNumber(enemySprite, "life", 2)
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
        sprites.setDataNumber(enemySprite, "life", 3)
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
        sprites.setDataNumber(enemySprite, "life", 4)
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
        sprites.setDataNumber(enemySprite, "life", 1)
    }
    enemySprite.setPosition(randint(160, 170), randint(0, 120))
    enemySprite.setVelocity(-50, 0)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
    bossSpawned = false
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Witch, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "life", -1)
    if (sprites.readDataNumber(otherSprite, "life") == 0) {
        otherSprite.destroy()
        info.changeScoreBy(4)
        sprite.startEffect(effects.trail)
    } else {
        otherSprite.x += 50
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Robot, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "life", -1)
    if (sprites.readDataNumber(otherSprite, "life") == 0) {
        otherSprite.destroy()
        info.changeScoreBy(2)
        sprite.startEffect(effects.trail)
    } else {
        otherSprite.x += 50
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tree, function (sprite, otherSprite) {
    info.changeScoreBy(-3)
    scene.cameraShake(3, 500)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Shark, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "life", -1)
    if (sprites.readDataNumber(otherSprite, "life") == 0) {
        otherSprite.destroy()
        info.changeScoreBy(1)
        sprite.startEffect(effects.trail)
    } else {
        otherSprite.x += 50
    }
})
let levelHighScore = 0
let enemySprite: Sprite = null
let bossSpawned = false
let projectile: Sprite = null
let mySprite: Sprite = null
let level = 0
scene.setBackgroundColor(1)
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
    if (levelHighScore < info.score()) {
        levelHighScore = info.score()
    }
    if (levelHighScore < 50) {
        level1Enemies()
    } else {
        level1Boss()
    }
})
