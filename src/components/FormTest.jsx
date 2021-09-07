import React, { Component } from 'react'
// 这是一个表单测试组件
export default class FormTest extends Component {
    state = {
        loginId: '',
        loginPwd: '',
        city: 'beijing',
        sex: 'male',
        allLoves: [
            {
                value: 'basketball',
                text: '打篮球',
                id: 1,
            },
            {
                value: 'football',
                text: '足球',
                id: 2,
            },
            {
                value: 'music',
                text: '音乐',
                id: 3,
            },
            {
                value: 'other',
                text: '其它',
                id: 4,
            },
        ],
        selectLoves: ['other'],
    }
    change = (e) => {
        let val = e.target.value
        const name = e.target.name
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                // 此时就是变成选中的状态
                val = [...this.state.selectLoves, val]
            } else {
                // 此时就是变成非选中的状态
                val = this.state.selectLoves.filter((item) => item !== val)
            }
        }
        this.setState({
            [name]: val,
        })
    }
    getCheckboxes() {
        return this.state.allLoves.map((item) => (
            <label key={item.id}>
                <input
                    type='checkbox'
                    name='selectLoves'
                    value={item.value}
                    checked={this.state.selectLoves.includes(item.value)}
                    onChange={this.change}
                />
                {item.text}
            </label>
        ))
    }
    render() {
        return (
            <div>
                <p>
                    <input
                        type='text'
                        name='loginId'
                        placeholder='请输入账号'
                        value={this.state.loginId}
                        onChange={this.change}
                    />
                </p>
                <p>
                    <input
                        type='password'
                        name='loginPwd'
                        placeholder='请输入密码'
                        value={this.state.loginPwd}
                        onChange={this.change}
                    />
                </p>
                <p>
                    <select
                        name='city'
                        value={this.state.city}
                        onChange={this.change}
                    >
                        <option value='beijing'>北京</option>
                        <option value='shanghai'>上海</option>
                        <option value='wuhan'>武汉</option>
                    </select>
                </p>
                <p>
                    <label>
                        <input
                            type='radio'
                            name='sex'
                            value='male'
                            checked={this.state.sex === 'male'}
                            onChange={this.change}
                        />
                        男
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='sex'
                            value='female'
                            checked={this.state.sex === 'female'}
                            onChange={this.change}
                        />
                        女
                    </label>
                </p>
                {this.getCheckboxes()}
                <p>
                    <button
                        onClick={() => {
                            console.log(this.state)
                        }}
                    >
                        获取当前状态
                    </button>
                </p>
            </div>
        )
    }
}
