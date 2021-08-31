import React, { Component } from 'react'

export default class OldLifeClycle extends Component {
    // 此时是进行初始化
    constructor(props) {
        super(props)
        // console.log(this.state)
        this.state = {
            n: 1,
        }
        console.log('constructor')
        // this.setState({
        //     n: 2
        // })
    }
    // 表示组件即将挂载 此时已经可以获取到数据
    componentWillMount() {
        console.log('componentWillMount', this.state, this.props)
        // this.setState({
        //     n: 2
        // }, () => {
        //     console.log(this.state.n)
        // })
    }
    // 就是组件挂载之后 才会执行当前函数 只会执行一次
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 更新流程
    // 就是接受属性的时候 才会触发当前函数
    // componentWillReceiveProps(nextProps) {
    //     // 参数为新的属性对象
    //     console.log('componentWillReceiveProps', nextProps)
    // }
    // 就是表示组件是否应该更新 根据返回值确定当前组件是需要进行更新的  此时我们可以做性能优化
    shouldComponentUpdate(nextProps, nextState) {
        console.log(
            'shouldComponentUpdate',
            this.props,
            nextProps,
            this.state,
            nextState
        )
        // 此时就是可以阻止React对组件的跟新
        if (this.props.n === nextProps.n && this.state.n === nextState.n) return false
        return true
    }
    // 就是组件即将更新的时候所触发的函数
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', this.state, nextState, this.props, nextProps)
    }
    // 就是组件重新渲染之后 才会触犯该函数
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', this.state, prevState, this.props, prevProps)
    }
    // 就是组件被销毁时所触发的函数
    componentWillUnmount() {
        console.log('componentWillUnmount', this.state, this.props)
    }
    
    handleClick = () => {
        this.setState({
            n: this.state.n + 1,
        })
    }
    render() {
        console.log('render')
        console.log(this.state, this.props)
        return (
            <React.Fragment>
                <div>当前状态: {this.state.n}</div>
                <div>属性状态: {this.props.n}</div>
                <button onClick={this.handleClick}>状态+1</button>
            </React.Fragment>
        )
    }
}
