import P5 from 'p5'

const sketch = (p: P5) => {
  p.preload = () => {}

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)

    p.noStroke()
    p.noLoop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {}
}

export default sketch
