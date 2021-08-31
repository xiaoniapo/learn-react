import React, { Component } from 'react'

export default class Slot extends Component {
    handleClick = () => {
        console.log('这是在子组件中')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.content}
                {this.props.children}
            </div>
        )
    }
}
