// 在这里存放所有的入口
import React, { Component } from 'react'
import Modal from './components/Modal'
export default class App extends Component {
    state = {
        showModal: true,
    }
    handleClick = (e) => {
        console.log('我执行了', e.target)
        // 此时因为当前是异步执行的 所以有冒泡会先执行到冒泡函数上执行 此时状态的showModal就是true
        // 两次执行setState方法 此时就是 只是从原来的状态进行了改变
        this.setState({
            showModal: !this.state.showModal,
        }, () => {
            console.log(this.state.showModal)
        })
    }
    render() {
        return (
            <div>
                <img
                    src='https://img2.baidu.com/it/u=1329254260,162758986&fm=26&fmt=auto&gp=0.jpg'
                    alt='这是一个哈士奇'
                />
                {this.state.showModal ? (
                    <Modal close={this.handleClick}>
                        <h1>这是一个测试的中间内容</h1>
                        <button onClick={this.handleClick}>关闭</button>
                    </Modal>
                ) : null}
                <button onClick={this.handleClick}>显示</button>
            </div>
        )
    }
}
