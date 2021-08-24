import React, { Component } from 'react'
import Ball from './Ball'
import { getRandom } from '../utils/getRandom'
export default class BallList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ballInfo: [] // 存储所有小球得基本信息
        }
        const timer = setInterval(() => {
            const info = {
                x: getRandom(0, document.documentElement.clientWidth - 100),
                y: getRandom(0, document.documentElement.clientHeight - 100),
                bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`,
                xSpeed: getRandom(3, 10),
                ySpeed: getRandom(3, 10)
            }
            this.setState({
                ballInfo: [...this.state.ballInfo, info]
            })
            if (this.state.ballInfo.length > this.props.num) {
                clearInterval(timer)
            }
        }, 1000)
    }
    render() {
        const ballList = this.state.ballInfo.map((item, index) => <Ball key={index} {...item} />)
        return (
            <div>
                {ballList}
            </div>
        )
    }
}
