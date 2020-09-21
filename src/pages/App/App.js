import React from 'react'
import './App.css'

class App extends React.Component {

  async componentDidMount() {
    let num = 6
    let r = 225
    let startAngle = 0
    let arc = Math.PI / num
    let ctx
    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')

    for (let i = 0; i < num*2; i++) {
      let angle = startAngle + (i * arc)
      if (i%2 === 0) {
          ctx.fillStyle = '#f0f0f0'
      } else ctx.fillStyle = '#f0eadc'
      ctx.beginPath()
      ctx.arc(r, r, r, angle, angle + arc, false)
      ctx.arc(r, r, 0, angle + arc, angle, true)
      ctx.fill()
      ctx.save()
      ctx.restore()
    }
  }

  render() {
    return (
      <div className="App">
        <p>12</p>
        <div class="container">
          <div class="sphere">
            <canvas id="canvas" width="450px" height="450px"></canvas>
          </div>
        </div>
      </div>
    )
  }
}

export default App
