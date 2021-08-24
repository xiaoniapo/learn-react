import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        n: 123
    }
    constructor(props) {
        super(props)
        this.timer = setInterval(() => {
            this.setState({
                n: this.state.n - 1
            })
            if (this.state.n <= 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }
    render() {
        return (
            <div>
                <A n={this.state.n} />
            </div>
        )
    }
}
function A(props) {
    return <B n={props.n} />
}
function B(props) {
    return <div>{props.n}</div>
}
