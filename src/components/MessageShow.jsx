import React, { Component } from 'react'
import ShowList from './ShowList'
import Pagination from './Pagination'
import { getData } from '../utils/request'
import '../style/pagination.css'
export default class MessageShow extends Component {
    state = {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pagerCount: 5,
        data: [],
    }
    constructor(props) {
        super(props)
        // 初始获取数据
        this.getMessage({
            page: this.state.currentPage,
            size: this.state.pageSize,
        })
    }
    // 就是为了获取
    getMessage = (opt) => {
        getData(this.props.url)(opt).then((data) => {
            this.setState({
                data: data.data.findByPage,
                total: data.data.cont,
                currentPage: opt.page
            })
        })
    }
    render() {
        // 此时就是针对一些没有值的进行操作
        const message = Object.assign(
            {
                currentPage: 1,
                pageSize: 10,
                total: 0,
                pagerCount: 7,
            },
            this.state
        )
        return (
            <div className='container'>
                <ShowList data={message.data} />
                {message.total <= message.pageSize ? '' : <Pagination {...message} getMessage={this.getMessage} />}
            </div>
        )
    }
}
