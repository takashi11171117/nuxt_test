import P5 from 'p5'

const sketch = (p: P5) => {
  // const radius: number, slices: number, slice: number
  let radius: number, slices: number, slice: number
  let x: number, y: number
  // const circles: number

  p.preload = () => {}

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)

    slices = 6
    radius = 100

    p.noStroke()
    p.noLoop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)
  }

  p.draw = () => {
    for (let i = 0; i < slices; i++) {
      slice = p.TWO_PI / slices
      const angle = i * slice
      x = p.windowWidth / 2 + p.cos(angle) * radius
      y = p.windowHeight / 2 + p.sin(angle) * radius
      p.ellipse(x, y, 8, 8)
    }
  }
}

export default sketch
