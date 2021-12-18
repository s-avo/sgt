function playSound(event) {
    console.log(event)
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!audio) {
        return
    }
    audio.currentTime = 0
    audio.play()

    let key = document.querySelector(`.key[data-key="${event.keyCode}"`)
    key.classList.add('playing')
}

function removeTransition(event) {
    this.classList.remove('playing')
}

let keys = document.querySelectorAll('.key')
for (const key of keys) {
    key.addEventListener('transitionend', removeTransition)
}

window.addEventListener('keydown', playSound)
