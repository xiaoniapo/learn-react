import React, { Component } from 'react'

export default class CheckboxGroup extends Component {
    handleChange = e => {
        this.props.onChange && this.props.onChange(e)
    }
    getCheckboxes() {
        return this.props.datas.map((it) => (
            <label key={it.value}>
                <input
                    type='checkbox'
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.chooseDatas.includes(it.value)}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }
    render() {
        const labels = this.getCheckboxes()
        return <div>{labels}</div>
    }
}
