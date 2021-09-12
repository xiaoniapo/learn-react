import React, { Component } from 'react'
import { type } from '../../types/dataType'
export default class SelectGroup extends Component {
    static propTypes = {
        datas: type.datas,
        selectedData: type.selectDatas,
        onChange: type.onChange
    }
    static defaultProps = {
        datas: [],
        selectedData: ""
    }
    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e)
    }
    getCheckboxes() {
        return this.props.datas.map((it) => (
            <option
                key={it.value}
                name={this.props.name}
                value={it.value}
                checked={it.value === this.props.selectedData}
                onChange={this.handleChange}
            >
                {it.text}
            </option>
        ))
    }
    render() {
        const labels = this.getCheckboxes()
        return <select>{labels}</select>
    }
}
