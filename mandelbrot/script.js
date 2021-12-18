let canvas = document.createElement('canvas')
canvas.width  = 600
canvas.height = 600 
document.body.appendChild(canvas);

let ctx = canvas.getContext('2d')

function belongsToMandelbrot(x, y) {

    let realPart = x
    let imaginaryPart = y

    const MAX_ITERATIONS = 100
    
    for (let i = 0; i < MAX_ITERATIONS; i++) {
        // Calculate the real and imaginary parts separately
        let temporaryRealPart = realPart * realPart - imaginaryPart * imaginaryPart + x
        let temporaryImaginaryPart = (2 * realPart * imaginaryPart) + y

        realPart = temporaryRealPart
        imaginaryPart = temporaryImaginaryPart

        if (realPart * imaginaryPart > 5) { // If within the mandelbrot set
            return (i / MAX_ITERATIONS) * 100
        }
    }
    return 0
}

function draw() {

    let zoomFactor = 2900
    let translateX = .7
    let translateY = .6

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            const belongs = belongsToMandelbrot(x / zoomFactor - translateX,
                                                y / zoomFactor - translateY)

            if (belongs == 0) {
                ctx.fillStyle = '#000000'
                ctx.fillRect(x, y, 1, 1)

            } else {
                ctx.fillStyle = `hsl(240, 100%, ${belongs}%)`
                ctx.fillRect(x, y, 1, 1)
            }
        }
    }
}

draw()