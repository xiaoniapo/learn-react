import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        n: 1,
    }
    // constructor (props) {
    //     super(props)
    //     setInterval(() => {
    //         此时我们不难发现 当前改变状态的函数是同步的
    //         this.setState({
    //             n: this.state.n + 1
    //         })
    //         输出的就是就是新值
    //         console.log(this.state.n)
    //     }, 1000)
    // }
    handleClick = () => {
        // 此时就是异步的
        // this.setState(
        //     {
        //         n: this.state.n + 1,
        //     },
        //     () => {
        //         // 此时就是在render完之后执行的
        //         // console.log(this.state.n)
        //         this.setState(
        //             {
        //                 n: this.state.n + 1,
        //             },
        //             () => {
        //                 this.setState({
        //                     n: this.state.n + 1,
        //                 })
        //             }
        //         )
        //     }
        // )

        // 在点击的时候 可以发现 当前输出的值还是旧值
        // console.log(this.state.n)
        // 因为此时改变状态是异步 所以使用的时候 还是旧值
        // this.setState({
        //     n: this.state.n + 1,
        // })
        // this.setState({
        //     n: this.state.n + 1,
        // })
        // console.log(this.state.n)
        this.setState(state => {
            return {
                n: state.n + 1
            }
        })
        this.setState(state => {
            console.log(state)
            return {
                n: state.n + 1
            }
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>{this.state.n}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
