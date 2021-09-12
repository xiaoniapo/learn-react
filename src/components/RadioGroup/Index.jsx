import React, { Component } from 'react'
import { type } from '../../types/dataType'
export default class RadioGroup extends Component {
    static propTypes = {
        datas: type.datas,
        onChange: type.onChange,
        selectDatas: type.selectDatas,
    }
    static defaultProps = {
        datas: [],
        selectDatas: '',
    }
    onChange = (e) => {
        this.props.onChange && this.props.onChange(e)
    }
    getRadioList = () =>
        this.props.datas.map((it) => (
            <label key={it.value}>
                <input
                    type='radio'
                    name={this.props.name}
                    value={it.value}
                    checked={it.value === this.props.selectDatas}
                    onChange={this.onChange}
                />
                {it.text}
            </label>
        ))
    render() {
        const showList = this.getRadioList()
        return <div>{showList}</div>
    }
}
