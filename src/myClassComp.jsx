import React from 'react'

export default class MyClassComp extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render () {
        if (this.props.obj) {
            // 最终返回的表达式必须是单根的 
            return (
                <React.Fragment>
                    <p>名字: {this.props.obj.name}</p>
                    <p>年龄: {this.props.obj.age}</p>
                </React.Fragment>
            )
        }
        if(this.props.ui) {
            return this.props.ui
        }
        return <div>这是一个类组件,当前传递的值是:{this.props.number}</div>
    }
}