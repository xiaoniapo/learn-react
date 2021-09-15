import React, { Component } from 'react'

export default class myTest extends Component {
    render() {
        return (
            <div>
                这是一个测试组件: {this.props.a}
            </div>
        )
    }
}
