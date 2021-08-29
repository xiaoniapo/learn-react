import React, { Component } from 'react'
import PageItem from './PageItem'
// 需要传递过来的值:
// 1. currentPage 当前页
// 2. total 数据总量
// 3. pageSize 每一页的数据量
// 4. pagerCount 表示一次最多展示的页码数量
export default class Pagination extends Component {
    handleClick = (e) => {
        const value = e.target.innerText
        const pager = Math.ceil(this.props.total / this.props.pageSize)
        let page
        if (value === '上一页') {
            page = this.props.currentPage <= 1 ? 1 : this.props.currentPage - 1
        } else if (value === '首页') {
            page = 1
        } else if (value === '尾页') {
            page = pager
        } else if (value === '下一页') {
            page =
                this.props.currentPage >= pager
                    ? pager
                    : this.props.currentPage + 1
        } else {
            page = +value
        }
        if (page === this.props.currentPage) {
            return
        }
        // 触发页面改变事件
        this.props.getMessage &&
            this.props.getMessage({
                page,
                size: this.props.pageSize,
            })
    }
    getShowList() {
        let start = 0,
            end = 0
        // 此时表示最终会在界面上进行展示的页码数量
        const pager = Math.ceil(this.props.total / this.props.pageSize) // 总的页数
        if (pager <= this.props.pagerCount) {
            // 此时直接展示所有的页码
            start = 1
            end = pager
        } else {
            // 现需要将当前页码 展示在中间
            const value = Math.floor(pager / 2)
            if (this.props.currentPage < value) {
                start = 1
                end = this.props.pagerCount
            } else if (pager - this.props.currentPage < value) {
                end = pager
                start = end - this.props.pagerCount
            } else {
                start = this.props.currentPage - value
                end = this.props.currentPage + value
            }
        }
        const showList = []
        for (let i = start; i < start + end; i++) {
            showList.push(i)
        }
        return showList
    }
    render() {
        const pager = Math.ceil(this.props.total / this.props.pageSize)
        const showList = this.getShowList().map((item) => (
            <PageItem
                className={item === this.props.currentPage ? 'active' : ''}
                key={item}
                text={item}
            />
        ))
        return (
            <div className='page-container'>
                <ul className='list' onClick={this.handleClick}>
                    <PageItem
                        className={this.props.currentPage === 1 ? 'forbid' : ''}
                        text='首页'
                    />
                    <PageItem
                        className={this.props.currentPage === 1 ? 'forbid' : ''}
                        text='上一页'
                    />
                    {showList}
                    <PageItem
                        className={
                            this.props.currentPage === pager ? 'forbid' : ''
                        }
                        text='下一页'
                    />
                    <PageItem
                        className={
                            this.props.currentPage === pager ? 'forbid' : ''
                        }
                        text='尾页'
                    />
                </ul>
                <span>
                    {this.props.currentPage} /
                    {Math.ceil(this.props.total / this.props.pageSize)}
                </span>
            </div>
        )
    }
}
