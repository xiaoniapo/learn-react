import React, { Component } from 'react'

export default class Tick extends Component {
    // 初始化组件状态
    constructor(props) {
        super(props)
        this.state = {
            n: this.props.number,
            m: 123
        }
        this.timer = setInterval(() => {
            // 不要直接修改组件数据
            // this.state.n--
            // 通过此函数进行修改该状态 将它进行混入 
            this.setState({
                n: this.state.n - 1,
                a: 123
            })
            if (this.state.n <= 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }
    render() {
        return (
            <div>
                当时剩余时间: {this.state.n}
                其余值：{this.state.m} <br></br>
                {this.state.a === undefined ? '当前暂无此值' : this.state.a}
            </div>
        )
    }
}
