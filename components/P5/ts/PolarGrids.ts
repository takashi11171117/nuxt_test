import P5 from 'p5'

const sketch = (p: P5) => {
  // const radius: number, slices: number, slice: number
  let radius: number
  let x: number, y: number
  // const circles: number

  p.preload = () => {}

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)

    radius = 100

    p.noStroke()
    p.noLoop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)
  }

  p.draw = () => {
    const angle = 0
    x = p.windowWidth / 2 + p.cos(angle) * radius
    y = p.windowHeight / 2 + p.sin(angle) * radius
    p.ellipse(x, y, 8, 8)
  }
}

export default sketch
