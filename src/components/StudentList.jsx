import React, { Component } from 'react'
import Student from './Student'
export default class StudentList extends Component {
    render() {
        // 对于循环渲染 就是利用在jsx中书写表达式为数组的时候 就是会将数组进行遍历 然后对每一项进行渲染
        // 此时就是返回一个jsx表达式对象
        const stus = this.props.stus.map(item => <Student key={item.id} {...item} />)
        return (
            <ul>
                {stus}
            </ul>
        )
    }
}
