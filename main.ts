namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath8, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. . f f f . . . . . . . . f 
. f f c c . . . . . . f c b 
f f c c . . . . . . f c b b 
f c f c . . . . . . f b c c 
f f f c c . c c . f c b b c 
f f c 3 c c 3 c c f b c b b 
f f b 3 b c 3 b c f b c c b 
. c 1 b b b 1 b c b b c c c 
. c 1 b b b 1 b b c c c c . 
c b b b b b b b b b c c . . 
c b 1 f f 1 c b b b b f . . 
f f 1 f f 1 f b b b b f c . 
f f 2 2 2 2 f b b b b f c c 
. f 2 2 2 2 b b b b c f . . 
. . f b b b b b b c f . . . 
. . . f f f f f f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100004040404040704040404040404040404040205050402020402020402020202040402050204020204020205020202020404020502040505050505050502020204040205040505050505050205040404040402050405020504040505050505020404020504020205040505050505040204040202050202050405050404050402040405050505050504020204020504020404040404040404040202040202040204040202020204040202020402020404040405050505050505050204020205040404020202020202020202040202020204040404040204040404040404040202040402020202020202020202020202020404040404040404040404040404040604`,
            img`
2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . 2 . . 2 . . . . 2 
2 . . . 2 . . 2 . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . 2 . . . . . . . . 2 2 2 2 
2 . . 2 . . . 2 2 . . . . . . 2 
2 . . 2 . . . 2 . . . . . 2 . 2 
2 . . . . . . 2 . . 2 2 . 2 . 2 
2 . . . . . . 2 . . 2 . . 2 . 2 
2 2 2 2 2 2 2 2 . . 2 . . 2 . 2 
2 . . . . 2 2 . . . 2 . . 2 2 2 
2 . . . . . . . . . 2 . . . 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.rock0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath8],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
