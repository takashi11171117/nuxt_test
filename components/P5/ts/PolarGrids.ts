import P5 from 'p5'

const sketch = (p: P5) => {
  let radius: number, slices: number, slice: number
  let x: number, y: number
  let circles: number
  const cols = ['#2941CC', '#6B81FF', '#4DC5FF', '#FFF0E6', '#FF6630']

  p.preload = () => {}

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)

    slices = 6
    radius = 10
    circles = 20

    p.noStroke()
    p.noLoop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(20, 50, 100)
  }

  p.draw = () => {
    for (let j = 0; j < circles; j++) {
      for (let i = 0; i < slices; i++) {
        slice = p.TWO_PI / slices
        const angle = i * slice
        x = p.windowWidth / 2 + p.cos(angle) * radius * (j + 1)
        y = p.windowHeight / 2 + p.sin(angle) * radius * (j + 1)

        const c = Math.floor(
          p.map(y, 0, p.TWO_PI, 0, cols.length - 1) % cols.length
        )
        p.fill(p.color(cols[c]))
        p.ellipse(x, y, 8, 8)
      }
      slices += 6
    }
  }
}

export default sketch
