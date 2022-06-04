input.onButtonPressed(Button.A, function () {
    pelotita.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.B, function () {
    pelotita.turn(Direction.Left, 45)
})
let pelotita: game.LedSprite = null
pelotita = game.createSprite(1, 1)
let agujero = game.createSprite(randint(0, 4), randint(0, 4))
agujero.set(LedSpriteProperty.Blink, 300)
let estado = 0
game.setScore(0)
basic.forever(function () {
    if (estado == 0) {
        game.startCountdown(10000)
        estado += 1
    }
    if (pelotita.isTouching(agujero)) {
        agujero.delete()
        agujero = game.createSprite(randint(0, 4), randint(0, 4))
        game.addScore(1)
        estado = 0
    } else {
        pelotita.ifOnEdgeBounce()
        pelotita.move(1)
        basic.pause(200)
    }
})
