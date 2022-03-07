input.onGesture(Gesture.Shake, function () {
    if (randint(0, 2) == 0) {
        basic.showString("Yes")
    } else if (randint(0, 2) == 1) {
        basic.showString("No")
    } else if (randint(0, 2) == 2) {
        basic.showString("Maybe")
    }
})
basic.showString("Ask a question")
let Yes = 0
let No = 1
let Maybe = 2
