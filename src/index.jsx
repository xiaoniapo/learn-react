import React from 'react'
import ReactDOM from 'react-dom'
import './style/init.css'
import BallList from './components/BallList'
// import Ball from './components/Ball'

// ReactDOM.render(
//     <Ball x={300} y={400} xSpeed={4} ySpeed={5} bg='lightblue' />,
//     document.getElementById('root')
// )
ReactDOM.render(
    <BallList num={10} />,
    document.getElementById('root')
)
