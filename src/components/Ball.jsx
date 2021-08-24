import React, { Component } from 'react'
import '../style/Ball.css'
export default class Ball extends Component {
    constructor(props) {
        super(props)
        this.state = {
            xSpeed: props.xSpeed || 3,
            ySpeed: props.ySpeed || 5,
            x: props.x || 0,
            y: props.y || 0,
        }
        const htmlWidth = document.documentElement.clientWidth
        const htmlHeight = document.documentElement.clientHeight
        setInterval(() => {
            // 不能在外面进行获取 因为一开始还没有进行渲染
            const width = 100
            const height = 100
            this.setState({
                x: this.state.x + this.state.xSpeed,
                y: this.state.y + this.state.ySpeed,
            })
            if (this.state.x < 0 || this.state.x >= htmlWidth - width) {
                this.setState({
                    xSpeed: -this.state.xSpeed,
                })
            }
            if (this.state.y < 0 || this.state.y >= htmlHeight - height) {
                this.setState({
                    ySpeed: -this.state.ySpeed,
                })
            }
        }, 16)
    }
    render() {
        return (
            <div
                className='ball'
                style={{
                    left: this.state.x,
                    top: this.state.y,
                    background: this.props.bg,
                }}
            ></div>
        )
    }
}
