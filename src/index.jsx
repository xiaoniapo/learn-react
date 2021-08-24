import React from 'react'
import ReactDOM from 'react-dom'
import TickController from './components/TickController'
// import Tick from './components/Tick'
// 正常函数内部得
// function handleClick(e) {
//     console.log(this) // undefined
//     console.log(e)
//     console.log(123, '点击了')
// }

// const div = (
//     <div
//         // onClick={handleClick}
//         onMouseEnter={(e) => {
//             console.log('悬浮了', this, e) // undefined
//         }}
//     >
//         这是一个测试组件
//     </div>
// )

// ReactDOM.render((<Tick num={10} />), document.getElementById('root'))
ReactDOM.render(<TickController />, document.getElementById('root'))