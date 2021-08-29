import React, { Component } from 'react'

// 需要传递的值：
export default class PageItem extends Component {
    render() {
        return (
            <li className={this.props.className}>{this.props.text}</li>
        )
    }
}
