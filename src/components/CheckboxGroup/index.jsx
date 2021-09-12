import React, { Component } from 'react'
import { type } from '../../types/dataType'

export default class CheckboxGroup extends Component {
    static propTypes = {
        datas: type.datas,
        chooseDatas: type.chooseDatas,
        onChange: type.onChange
    }
    static defaultProps = {
        datas: [],
        chooseDatas: [],
    }
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
