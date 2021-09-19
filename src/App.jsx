import React, { Component } from 'react'
// import myTest from './components/myTest'
// import withLog from './components/HOC/withLog'
// import withLogin from './components/HOC/withLogin'
// // 此时当前组件就被进行了包装
// const IsLoginComp = withLogin(withLog(myTest))
// 进行多次包装 增加新的功能
import CheckGroup from './components/CheckGroup'
export default class App extends Component {
    state = {
        data: [{
            value: 'basketball',
            text: '篮球'
        }, {
            value: 'football',
            text: '足球'
        }, {
            value: 'sing',
            text: '唱歌'
        }],
        chooseData: [],
        name: 'checkbox',
    }
    onChange = (chooseData) => {
        this.setState({
            chooseData
        })
    }
    render() {
        // 此时利用html的特点 当只写字段 对应的就是其值为true
        return <CheckGroup {...this.state} onChange={this.onChange} />
    }
}

