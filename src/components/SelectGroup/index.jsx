import React, { Component } from 'react'

export default class CheckboxGroup extends Component {
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
