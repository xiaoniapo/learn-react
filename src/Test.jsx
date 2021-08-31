import React, { Component } from 'react'
import NewLifeCycle from './NewLifeCycle'

export default class Test extends Component {
    state = {
        n: 0
    }
    render() {
        return (
            <div>
                <NewLifeCycle n={this.state.n} />
                <button
                    onClick={() => {
                        this.setState({
                            n: this.state.n + 1
                        })
                    }}
                >
                    属性+1
                </button>
            </div>
        )
    }
}
