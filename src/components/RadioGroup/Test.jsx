import React, { Component } from 'react'
import Index from './Index'
import { getAllStudent } from '../../api/student'
export default class Test extends Component {
    state = {
        datas: [],
        selectDatas: '',
    }
    async componentDidMount() {
        const res = await getAllStudent()
        const map = res.map((item) => ({
            value: item.id + '',
            text: item.name,
        }))
        this.setState({
            datas: map,
            selectDatas: map[0].value,
        })
    }
    onChange = (e) => {
        this.setState({
            selectDatas: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <Index {...this.state} name='loves' onChange={this.onChange} />
            </div>
        )
    }
}
