import React, { Component } from 'react'

export default class Slot extends Component {
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
