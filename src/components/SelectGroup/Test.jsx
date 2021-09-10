import React, { Component } from 'react'
import Index from './index'
import { getAllStudent } from '../../api/student'
export default class Test extends Component {
    state = {
        datas: [],
        selectedData: ""
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
        this.setState({
            selectedData: e.target.value
        })
        
    }
    render() {
        return (
            <div>
                <Index name='loves' {...this.state} onChange={this.onChange} />
            </div>
        )
    }
}
