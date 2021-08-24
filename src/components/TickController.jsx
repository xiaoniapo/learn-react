import React, { Component } from 'react'
import Tick from './Tick'
export default class TickController extends Component {
    state = {
        isOver: false,
    }
    // constructor (props) {
        // super(props)
        // 此时就是利用当bind返回一个绑定内部this得函数
        // 当然可以在传递函数得时候进行绑定 但是会导致每次都产生一个新的函数
        // this.handleClick = this.handleClick.bind(this)
        // this.isOver = this.isOver.bind(this)
    // }
    // 此时内部得this就是产生得实例 因为这样声明得最终就是在constructor中进行声明
    handleClick = () => {
        console.log(this)
        console.log('点击了')
    }
    isOver = () => {
        console.log(this)
        this.setState({
            isOver: true
        })
    }
    render() {
        let status = '倒计时还没有结束'
        if (this.state.isOver) {
            status = '倒计时结束'
        }
        console.log(this) // 此时this就是指向当前实例
        return (
            <div>
                <Tick
                    onClick={this.handleClick}
                    isOver={this.isOver}
                    num={10}
                />
                <p>{status}</p>
            </div>
        )
    }
}
