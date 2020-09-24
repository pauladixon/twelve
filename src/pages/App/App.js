import React from 'react'
import './App.css'

class App extends React.Component {

  async componentDidMount() {
    const numbers = [6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7]

    let startAngle = 0
    let arc = Math.PI / 6
    let ctx
    let numRadius = 200

    let canvas = document.getElementById("canvas")

    ctx = canvas.getContext('2d')
    ctx.font = '22px "monotype'

    for(let i = 0; i < 12; i++) {
      let angle = startAngle + (i * arc)
      ctx.fillStyle = "#bb9990"
      ctx.beginPath()
      ctx.arc(250, 250, 250, angle, angle + arc, false)
      ctx.arc(250, 250, 0, angle + arc, angle, true)
      ctx.fill()
      ctx.save()
      ctx.fillStyle = "#dae0e8"
      ctx.translate(250 + Math.cos(angle + arc / 2) * numRadius,
          250 + Math.sin(angle + arc / 2) * numRadius)
      ctx.rotate(angle + arc / 2 + Math.PI / 2)
      let number = numbers[i]
      ctx.fillText(number, -ctx.measureText(number).width / 2, 0)
      ctx.restore()
    }
  }

  render() {
    return (
      <div className="App">
        <div className='header'>12</div>
        <div class="container">
          <div class="sphere">
            <canvas id="canvas" width="500px" height="500px"></canvas>
          </div>
        </div>
      </div>
    )
  }
}

export default App
