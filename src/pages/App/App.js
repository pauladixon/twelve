import React from 'react'
import './App.css'

const {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} = require('react-raphael');
 

class App extends React.Component {

  async componentDidMount() {
    const numbers = [6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7]

    let startAngle = 0
    let arc = Math.PI / 6
    let ctx
    let numRadius = 200

    let canvas = document.getElementById("canvas")

    ctx = canvas.getContext('2d')
    ctx.font = '21px Helvetica'

    for(let i = 0; i < 12; i++) {
      let angle = startAngle + (i * arc)
      ctx.fillStyle = "rgba(445, 255, 255, .25)"
      ctx.beginPath()
      ctx.arc(250, 250, 250, angle, angle + arc, false)
      ctx.arc(250, 250, 0, angle + arc, angle, true)
      ctx.fill()
      ctx.save()
      ctx.fillStyle = "rgba(255, 255, 255)"
      ctx.translate(250 + Math.cos(angle + arc / 2) * numRadius,
          250 + Math.sin(angle + arc / 2) * numRadius)
      ctx.rotate(angle + arc / 2 + Math.PI / 2)
      let number = numbers[i]
      ctx.fillText(number, -ctx.measureText(number).width / 2, 0)
      ctx.restore()
    }
  }

  render() {

    var data = [
      {x:150,y:100,r:40,attr:{"stroke":"rgba(255, 255, 255, .15)","stroke-width":100},animate:Raphael.animation({cx:300},3000,"<>")},
      {x:600,y:300,r:60,attr:{"stroke":"rgba(255, 255, 255, .65)","stroke-width":150},animate:Raphael.animation({cx:200},6000,"<>")},
      {x:1350,y:650,r:30,attr:{"stroke":"rgba(255, 255, 255, .45)","stroke-width":100},animate:Raphael.animation({cx:800},9000,"<>")},
      {x:300,y:500,r:50,attr:{"stroke":"rgba(255, 255, 255, .25)","stroke-width":100},animate:Raphael.animation({cx:700},2000,"<>")},
      {x:250,y:650,r:70,attr:{"stroke":"rgba(255, 255, 255, .35)","stroke-width":150},animate:Raphael.animation({cx:600},6000,"<>")},
      {x:150,y:650,r:30,attr:{"stroke":"rgba(255, 255, 255, .15)","stroke-width":100},animate:Raphael.animation({cx:700},7000,"<>")},
      {x:600,y:200,r:10,attr:{"stroke":"rgba(255, 255, 255, .65)","stroke-width":100},animate:Raphael.animation({cx:700},3000,"<>")},
      {x:750,y:450,r:90,attr:{"stroke":"rgba(255, 255, 255, .45)","stroke-width":190},animate:Raphael.animation({cx:300},10000,"<>")},
      {x:400,y:200,r:30,attr:{"stroke":"rgba(255, 255, 255, .25)","stroke-width":100},animate:Raphael.animation({cx:400},4000,"<>")},
      {x:150,y:550,r:80,attr:{"stroke":"rgba(255, 255, 255, .35)","stroke-width":170},animate:Raphael.animation({cx:200},1000,"<>")},
      {x:150,y:100,r:20,attr:{"stroke":"rgba(255, 255, 255, .15)","stroke-width":100},animate:Raphael.animation({cx:300},3000,"<>")},
      {x:630,y:300,r:10,attr:{"stroke":"rgba(255, 255, 255, .65)","stroke-width":150},animate:Raphael.animation({cx:200},6000,"<>")},
      {x:1350,y:150,r:40,attr:{"stroke":"rgba(255, 255, 255, .45)","stroke-width":150},animate:Raphael.animation({cx:800},7000,"<>")},
    ]

    return (
      <div className="app">
        <div className='header'>⑫</div>
        <div className="container">
          <div className="sphere">
            <canvas id="canvas" width="500px" height="500px"></canvas>
          </div>
        </div>
        <Paper
          className='circles'
          width={1000} 
          height={1000}
        >
          <Set>    
            { data.map(function(ele,pos){
                return (<Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate}/>)
              })
            }
          </Set>
        </Paper>
      </div>
    )
  }
}

export default App
