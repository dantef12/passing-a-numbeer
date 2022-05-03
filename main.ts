input.onButtonPressed(Button.A, function () {
	
})
function run_countdown () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
}
basic.forever(function () {
	
})
