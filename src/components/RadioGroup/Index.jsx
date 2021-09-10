import React, { Component } from 'react'

export default class RadioGroup extends Component {
    onChange = e => {
        this.props.onChange && this.props.onChange(e)
    }
    getRadioList = () => (
        this.props.datas.map(it => (
            <label key={it.value}>
                <input 
                    type="radio" 
                    name={this.props.name}
                    value={it.value}
                    checked={it.value === this.props.selectDatas}
                    onChange={this.onChange}
                />
                {it.text}
            </label>
        ))
    )
    render() {
        const showList = this.getRadioList()
        return (
            <div>
                {showList}
            </div>
        )
    }
}
