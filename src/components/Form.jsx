import React, { Component } from 'react'

export default class Form extends Component {
    // 通过状态 我们去标识每一个字段所对应的值
    state = {
        val: '12222',
        selected: true,
        hobbies: ['打羽毛球', '跳高', '测试'],
        selectedLoves: [],
        selOpt: 'beijing',
        selOpts: [],
        sex: 'male',
    }
    // 通过此种方式我们进行设置值 我们就可以使得当前组件变成受控组件
    onChange = (e) => {
        // console.log(e.target.name)
        // 此时就是当前输入框的改变事件
        this.setState({
            val: e.target.value,
        })
    }
    onClick = () => {
        console.log(this.state.val)
    }
    selectChange = (e) => {
        this.setState({
            selected: e.target.checked,
        })
    }
    testChange = (e) => {
        const val = e.target.value
        if (e.target.checked) {
            // 就是当前变成选中的状态
            this.setState({
                selectedLoves: [...this.state.selectedLoves, val],
            })
        } else {
            // 当前变成未选中的状态
            this.setState({
                // 尽量不改变原来的数组
                selectedLoves: this.state.selectedLoves.filter(
                    (item) => item !== val
                ),
            })
        }
    }
    render() {
        // const inp = this.state.hobbies.map((item, index) => {
        //     return (
        //         <label key={index}>
        //             <input
        //                 type='checkbox'
        //                 value={item}
        //                 checked={this.state.selectedLoves.includes(item)}
        //                 onChange={this.testChange}
        //             />
        //             {item}
        //         </label>
        //     )
        // })
        return (
            <div>
                {/*此时当前组件的值由用户输入而决定 input对应去渲染 此时就是非受控组件 */}
                {/* <input type="text" /> */}
                {/* 此时我们进行修改内容 因为值就是确定的 */}
                {/* <input type="text" value={this.state.val} /> */}
                {/* 给定name字段 就可以方便我们进行标识 我们是对哪一个表单元素进行操作 这是input元素 */}
                {/* <input
                    type='text'
                    name='loginId'
                    value={this.state.val}
                    onChange={this.onChange}
                />
                <button onClick={this.onClick}>获取当前值</button> */}
                {/* 单选框 */}
                {/* <label>
                    <input type='checkbox' checked={this.state.selected} onChange={this.selectChange} />
                    测试1
                </label> */}
                {/* 多选框 */}
                {/* {inp}
                <button onClick={() => {
                    console.log(this.state.selectedLoves)
                }}>当前被选中的值</button> */}
                {/* 因为是多选 此时就是必须传输组 */}
                {/* <select
                    value={this.state.selOpts}
                    onChange={(e) => {
                        // console.log(e.target.name) // 就是可以通过当前对象进行标识
                        const value = e.target.value
                        if (this.state.selOpts.includes(value)) {
                            this.setState({
                                selOpts: this.state.selOpts.filter(item => item !== value)
                            })
                        } else {
                            this.setState({
                                selOpts: [...this.state.selOpts, value]
                            })
                        }
                    }}
                    multiple
                >
                    <option value='beijing'>北京</option>
                    <option value='shenzhen'>深圳</option>
                    <option value='chengdu'>成都</option>
                </select> */}
                {/* 单选框 */}
                <label>
                    <input
                        type='radio'
                        name='sex'
                        value='male'
                        checked={this.state.sex === 'male'}
                        onChange={() => {
                            this.setState({
                                sex: 'male',
                            })
                        }}
                    />
                    男
                </label>
                <label>
                    <input
                        type='radio'
                        name='sex'
                        value='female'
                        checked={this.state.sex === 'female'}
                        onChange={() => {
                            this.setState({
                                sex: 'female',
                            })
                        }}
                    />
                    女
                </label>
            </div>
        )
    }
}
