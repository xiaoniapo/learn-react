import React, { Component } from 'react'
import myTest from './components/myTest'
import withLog from './components/HOC/withLog'
import withLogin from './components/HOC/withLogin'
// 此时当前组件就被进行了包装
const IsLoginComp = withLogin(withLog(myTest))
// 进行多次包装 增加新的功能
export default class App extends Component {
    render() {
        // 此时利用html的特点 当只写字段 对应的就是其值为true
        return <IsLoginComp isLogin a={1234} />
    }
}
