
window.onload = function() {
    spawnSpirals(15)
}

function spawnSpirals(nrOfSpirals) {

    let colors = ['red', 'green', 'blue', 'purple', 'cyan', 'magenta']

    for (let i = 0; i < nrOfSpirals; i++) {
        let rp = {x: Math.floor(Math.random() * 800),
                  y: Math.floor(Math.random() * 600)}
        
        let ss = Math.floor(Math.random() * 12) + 3
        let gr = Math.floor(Math.random() * 17) + 3
        let nc = Math.floor(Math.random() * 45) + 5

        let rc = Math.floor(Math.random() * 5)
        let color = colors[rc]

        drawSpiral(color, rp, ss, gr, nc)
    }
}

function drawSpiral(color, initialPos, initialStepSize, growthRate, nrOfCycles) {
    let canvas = document.getElementById('myCanvas')
    let ctx = canvas.getContext('2d')

    let currentPos = initialPos
    let step = initialStepSize
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(currentPos.x, currentPos.y)
    for (let i = 0; i < nrOfCycles; i++) {
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y - step)
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x + step, currentPos.y)
        step += growthRate
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y + step)
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x - step, currentPos.y)
        step += growthRate
    }
    ctx.stroke()
    
}

function drawLineAndReturnPosition(ctx, x, y) {
    ctx.lineTo(x, y)
    return {
        x: x,
        y: y
    }
}

