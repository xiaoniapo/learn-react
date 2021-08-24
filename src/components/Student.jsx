import React from 'react'

export default class Student extends React.Component {
    render() {
        console.log(this.props)
        return (
            <li>
                【姓名】：{this.props.name}
                【年龄】：{this.props.age}
                【性别】：{this.props.sex === 1 ? '男' : '女'}
            </li>
        )
    }
}
