import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        number: this.props.num,
    }
    constructor(props) {
        console.log(props)
        super(props)
        const timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1,
            })
            if (this.state.number === 0) {
                clearInterval(timer)
                // 触发绑定在该组件上得事件
                // 此时我们通过对象进行调用 而在isOver函数中又没有当前属性
                props.isOver && props.isOver()
            }
        }, 1000)
    }
    render() {
        return (
            <div>
                倒计时: {this.state.number}
                {/* <h2 onClick={()=> {
                    // 此时通过对象进行调用 就会指向当前对象
                    this.props.onClick()
                }}>测试1</h2> */}
                {/* 此时直接调用 内部的this指向undefined react帮我们进行了处理 */}
                {/* <h2 onClick={this.props.onClick}>测试2</h2> */}
            </div>
        )
    }
}
