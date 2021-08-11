import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
// 必须写成如下形式 这样才不会在打包之后 打包之后 会发生路径转换
import src1 from './assets/1.jfif'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jfif'
import src4 from './assets/4.jfif'
import src5 from './assets/5.jfif'

const srcs = [src1, src2, src3, src4, src5]
let num = 0
let timer = null
const name = "test"
const container = (
    <div className="container">
        <img src={srcs[num]} className={name} alt="" />
    </div>
)
const root = document.getElementById('root')
root.onmouseenter = function () {
    stop()
}
root.onmouseleave = function () {
    start()
}
function start() {
    stop()
    timer = setInterval(() => {
        num = (num + 1) % srcs.length
        const container = (
            <div className="container">
                <img src={srcs[num]} className={name} alt="" />
            </div>
        )
        ReactDOM.render(container, document.getElementById('root'))
    }, 1000)
}
function stop() {
    clearInterval(timer)
}
ReactDOM.render(container, document.getElementById('root'))
start()

