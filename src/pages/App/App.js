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
      ctx.fillStyle = "#bb9990"
      ctx.beginPath()
      ctx.arc(250, 250, 250, angle, angle + arc, false)
      ctx.arc(250, 250, 0, angle + arc, angle, true)
      ctx.fill()
      ctx.save()
      ctx.fillStyle = "#f0f0f0"
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
      {x:50,y:50,r:40,attr:{"stroke":"#0b8ac9","stroke-width":5},animate:Raphael.animation({cx:60},500,"<>")},
      {x:100,y:100,r:40,attr:{"stroke":"#f0c620","stroke-width":5},animate:Raphael.animation({cx:105},500,"<>")},
      {x:150,y:50,r:40,attr:{"stroke":"#1a1a1a","stroke-width":5}},
      {x:200,y:100,r:40,attr:{"stroke":"#10a54a","stroke-width":5},animate:Raphael.animation({cx:195},500,"<>")},
      {x:250,y:50,r:40,attr:{"stroke":"#e11032","stroke-width":5},animate:Raphael.animation({cx:240},500,"<>")}
    ]

    return (
      <div className="App">
        <div className='header'>12</div>
        <div class="container">
          <div class="sphere">
            <canvas id="canvas" width="500px" height="500px"></canvas>
          </div>
        </div>
        <Paper width={300} height={300}>
          <Set>    
            { data.map(function(ele,pos){
                return (<Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate}/>)
              })
            }
          </Set>
          <Set>
              <Rect x={30} y={148} width={240} height={150} attr={{"fill":"#10a54a","stroke":"#f0c620","stroke-width":5}}/>
              <Ellipse x={150} y={198} ry={40} rx={100} attr={{"fill":"#fff","stroke":"#e11032"}} glow={{width:10,fill:true,color:"#0b8ac9",opacity:1}}/>
              <Image src="static/images/5circle.png" x={100} y={170} width={90} height={60} />
              <Text x={150} y={258} text="同一个世界 同一个梦想" attr={{"fill":"#fff"}}/>
              <Text x={150} y={273} text="One World One Dream" attr={{"fill":"#fff"}}/>
              <Path d={["M150 287L150 287"]} animate={Raphael.animation({"path": ["M80 287L220 287"]},500,"<>")} attr={{"stroke":"#fff"}}/>
              <Line x1={150} y1={290} x2={150} y2={290} animate={Raphael.animation({ x1:80, x2:220},500,"<>")} attr={{"stroke":"#fff"}}/>
          </Set>
        </Paper>
      </div>
    )
  }
}

export default App
