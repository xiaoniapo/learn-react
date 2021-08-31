import React, { Component } from 'react'
import './index.css'
// 此处的命名最终决定了在控制台中显示的样式
export default class Modal extends Component {
    handleClick = (e) => {
        if (e.target.className === 'modal-container') {
            this.props.close && this.props.close(e)
        }
    }
    render() {
        return (
            <div
                className='modal-container'
                style={{
                    backgroundColor: this.props.bg || 'rgba(0, 0, 0, .5)',
                }}
                onClick={this.handleClick}
            >
                <div className='modal-center'>{this.props.children}</div>
            </div>
        )
    }
}
