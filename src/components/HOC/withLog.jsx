import React from 'react'

export default function withTest(Comp) {
    return class Test extends React.Component {
        // 就是通过创建、销毁 做一些日志记录分析
        componentDidMount() {
            console.log(`当前组件${Comp.name}被创建${Date.now()}`)
        }
        componentWillUnmount() {
            console.log(`当前组件${Comp.name}被销毁${Date.now()}`)
        }
                
        render() {
            console.log(this.props)
            return (
                // 此时将所有的属性都传递给当前组件
                <Comp {...this.props}></Comp>
            )
        }
    }
}
