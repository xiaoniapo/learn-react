import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    constructor(props) {
        super(props)
        const defaultOpt = {
            minWidth: 800,
            leftWidth: 200,
            rightWidth: 200,
        }
        this.opt = Object.assign({}, defaultOpt, this.props)
    }
    render() {
        return (
            <div
                className='container'
                style={{
                    minWidth: this.opt.minWidth,
                }}
            >
                <div className='main'>{this.props.children}</div>
                <div className='left' style={{ width: this.opt.leftWidth }}>
                    {this.props.left}
                </div>
                <div className='right' style={{ width: this.opt.rightWidth }}>
                    {this.props.right}
                </div>
            </div>
        )
    }
}
