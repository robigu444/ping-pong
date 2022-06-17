namespace SpriteKind {
    export const ball = SpriteKind.create()
}
function create_left_mySprite () {
    mySprite = sprites.create(img`
        . 1 1 1 1 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 8 8 8 1 
        . 1 1 1 1 1 
        `, SpriteKind.Player)
    mySprite.x = 10
    controller.moveSprite(mySprite, 0, 150)
    mySprite.setStayInScreen(true)
}
function create_right () {
    mySprite2 = sprites.create(img`
        . 1 1 1 1 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 2 2 2 1 
        . 1 1 1 1 1 
        `, SpriteKind.Player)
    mySprite2.x = 150
    controller.player2.moveSprite(mySprite2, 0, 150)
    mySprite2.setStayInScreen(true)
}
function create_ball () {
    mySprite3 = sprites.create(img`
        . . . . . . . . 
        . 1 1 1 1 1 . . 
        . 1 1 1 1 1 . . 
        . 1 1 1 1 1 . . 
        . 1 1 1 1 1 . . 
        . 1 1 1 1 1 . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.ball)
    mySprite3.setBounceOnWall(true)
    mySprite3.setVelocity(55, 55)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == mySprite) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
create_left_mySprite()
create_right()
create_ball()
