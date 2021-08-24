import React from 'react'
import ReactDOM from 'react-dom'
// import Tick from './components/Tick'
import Test from './components/Test'
// 虽然可以使用属性进行传递传递状态 但是此时会导致父组件的数据很复杂 进而导致难以维护 
// 此时就可以通过在组件内部书写自己的数据 进而
// let number = 10
// ReactDOM.render(<Tick number={number} />, document.getElementById('root'))
// const timer = setInterval(() => {
//     number --
//     ReactDOM.render(<Tick number={number} />, document.getElementById('root'))
//     if (number <= 0) {
//         clearInterval(timer)
//     }
// }, 1000)
ReactDOM.render((<Test />), document.getElementById('root'))

