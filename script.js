var block2 = document.querySelector('body')
var size = 2
let pos = 0
setInterval(() => {
    console.log(block2.style.backgroundPositionY)
    block2.style.backgroundPositionY = `${pos}px`
    pos += 5
    if (pos === 100) {
        pos = 0
    }
    block2.style.backgroundSize = `${size}%`
    if (size>2) {
        size = 2
    } else {
        size = 3
    }

}, 500); 