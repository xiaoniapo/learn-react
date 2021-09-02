// 在这里存放所有的入口
import React, { Component } from 'react'
import ThreeLayout from './components/ThreeLayout'
export default class App extends Component {
    state = {
        minWidth: 800,
        leftWidth: 200,
        rightWidth: 200,
    }
    render() {
        return (
            <ThreeLayout
                {...this.state}
                left={<h1>这是左边内容区域</h1>}
                right={<h1>这是右边内容区域</h1>}
            >
                <div>这是中间内容区域</div>
            </ThreeLayout>
        )
    }
}
