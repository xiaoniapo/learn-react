import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
    state = {
        n: this.props.n,
    }
    // componentWillReceiveProps(nextProps) {
    //     // 此时会导致数据流变得很混乱 当前组件的状态值 就是有当前组件和传过来的属性共同控制
    //     // 故而不推荐这样使用
    //     this.setState({
    //         n: nextProps.n
    //     })
    // }
    // 参数就是更新之后的值
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state)
        // 此时返回的值 最终会和状态进行混合 就相当于setState
        return {
            n: props.n
        }
    }
    // 此时真实dom已经构建完成
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log(prevProps, prevState)
        return 123
    }
    componentDidUpdate(prevProps, prevState, snap) {
        console.log(prevProps, prevState, snap)
    }
    
    render() {
        return (
            <div>
                <div>
                    当前状态: {this.state.n}
                    属性：{this.props.n}
                </div>
                <button
                    onClick={() => {
                        this.setState({
                            n: this.state.n + 1,
                        })
                    }}
                >
                    状态+1
                </button>
            </div>
        )
    }
}
