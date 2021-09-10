import React, { Component } from 'react'
import Index from './index'
import { getAllStudent } from '../../api/student'
export default class Test extends Component {
    state = {
        datas: [],
        chooseDatas: [],
    }
    // 获取数据
    async componentDidMount() {
        const res = await getAllStudent()
        this.setState({
            datas: res.map((it) => ({
                value: it.id + '',
                text: it.name,
            })),
        })
    }
    onChange = (e) => {
        // 从模板中取出的值 是字符串 如果获取到的数据是数字 此时我们是无法进行比对成功的
        if (e.target.checked) {
            // 标识从没选中到选中状态
            this.setState({
                chooseDatas: [...this.state.chooseDatas, e.target.value],
            })
        } else {
            // 标识从选中变成没选中的状态
            this.setState({
                chooseDatas: this.state.chooseDatas.filter(
                    (item) => item !== e.target.value
                ),
            })
        }
    }
    render() {
        return (
            <div>
                <Index name='loves' {...this.state} onChange={this.onChange} />
            </div>
        )
    }
}
