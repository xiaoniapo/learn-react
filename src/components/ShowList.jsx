import React, { Component } from 'react'
// 需要传一个数组 []
export default class ShowList extends Component {
    render() {
        const show = this.props.data.map(item => (
            <li key={item.id}>
                【姓名】: {item.name}
                【年龄】：{item.age}
                【性别】：{item.sex === 1 ? '男' : '女'}
            </li>
        ))
        return (
            <ul>
                {show}
            </ul>
        )
    }
}
