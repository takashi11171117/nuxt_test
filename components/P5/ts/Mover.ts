import P5 from 'p5'

type MoverType = {
  applyForce: Function
  update: Function
  display: Function
  checkEdges: Function
  getMass: Function
}

const Mover = (p: P5, m: number, x: number, y: number) => {
  const location = p.createVector(x, y)
  const velocity = p.createVector(0, 0)
  const acceleration = p.createVector(0, 0)
  const mass = m

  return {
    getMass: () => {
      return mass
    },
    applyForce: (force: P5.Vector) => {
      const f = P5.Vector.div(force, mass)
      acceleration.add(f)
    },
    update: () => {
      velocity.add(acceleration)
      location.add(velocity)
      acceleration.mult(0)
    },
    display: () => {
      p.stroke(0)
      p.fill(175)
      p.ellipse(location.x, location.y, mass * 16, mass * 16)
    },
    checkEdges: () => {
      if (location.x > p.width) {
        location.x = p.width
        velocity.x *= -1
      } else if (location.x < 0) {
        velocity.x *= -1
        location.x = 0
      }

      if (location.y > p.height) {
        velocity.y *= -1
        location.y = p.height
      }
    }
  }
}

const sketch = (p: P5) => {
  const movers: MoverType[] = []

  p.preload = () => {}

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    ;[...Array(100)].map(() => movers.push(Mover(p, p.random(0.1, 5), 0, 0)))
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.background(255)
    ;[...Array(100)].map((_, i) => {
      const wind = p.createVector(0.001, 0)
      const m = movers[i].getMass()
      const gravity = p.createVector(0, 0.1 * m)

      movers[i].applyForce(wind)
      movers[i].applyForce(gravity)
      movers[i].update()
      movers[i].display()
      movers[i].checkEdges()
    })
  }
}

export default sketch
