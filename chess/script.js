const TILE_WIDTH  = 75
const TILE_HEIGHT = 75

const DARK_TILE_COLOR  = 'black'
const LIGHT_TILE_COLOR = 'white'

const canvas = document.getElementById('myCanvas')
const ctx    = canvas.getContext('2d')

canvas.style.width  = TILE_WIDTH * 8
canvas.style.height = TILE_HEIGHT * 8

class Board {
    constructor() {
        this.tiles = []

        for (let row = 0; row < 8; row++) {
            let tileRow = []
            for (let col = 0; col < 8; col++) {
                let color = row + col % 2 === 0 ? LIGHT_TILE_COLOR : DARK_TILE_COLOR
                tileRow.push(new Tile(col * TILE_WIDTH, row * TILE_HEIGHT,))
            }
            this.tiles.push(tileRow)
        }
    }

    draw() {
        for (const tileRow of this.tiles) {
            for (const tile of tileRow) {
                tile.draw()
            }
        }
    }
}

class Tile {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.rect(this.x, this.y, TILE_WIDTH, TILE_HEIGHT)
        ctx.fill()
    }
}

let board = new Board()
board.draw()

