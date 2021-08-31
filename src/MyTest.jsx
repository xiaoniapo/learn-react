import React, { Component } from 'react'
import Slot from './Slot'
export default class MyTest extends Component {
    handleClick = () => {
        console.log('我在父组件中')
    }
    render() {
        return (
            <div>
                <Slot>
                    <h1 onClick={this.handleClick}>这是传递过来的属性</h1>
                </Slot>
            </div>
        )
    }
}
