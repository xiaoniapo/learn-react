import React, { Component } from 'react'
import WrapperList from '../HOC/withList'
import PropTypes from 'prop-types'

class CheckBox extends Component {
    static propTypes = {
        info: PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }),
        onChange: PropTypes.func,
        name: PropTypes.string.isRequired,
        chooseData: PropTypes.arrayOf(PropTypes.string.isRequired)
    }
    onChange = (e) => {
        let res = null
        if (e.target.checked) {
            res = [...this.props.chooseData, e.target.value]
        } else {
            res = this.props.chooseData.filter(it => it !== e.target.value)
        }
        this.props.onChange && this.props.onChange(res)
    }
    render() {
        return (
            <label>
                <input 
                    type="checkbox" 
                    value={this.props.info.value}
                    onChange={this.onChange}
                    checked={this.props.chooseData.includes(this.props.info.value)}
                />
                {this.props.info.text}
            </label>
        )
    }
}
export default  WrapperList(CheckBox)
