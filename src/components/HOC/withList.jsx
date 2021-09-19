import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 此处就是根据一组数据进行渲染当前穿过来的组件
export default function WrapperList(WrapperedComponent) {
    return class GroupList extends Component {
        static propTypes = {
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                })
            ),
            chooseData: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.string.isRequired),
                PropTypes.string.isRequired
            ]),
            onChange: PropTypes.func, // 表示当选择改变的函数
            name: PropTypes.string.isRequired
        }
        static defaultProps = {
            data: [],
            chooseData: []
        }
        // 就是将最终的chooseData进行抛出 方便在外面直接进行赋值
        onChange = (value) => {
            this.props.onChange && this.props.onChange(value)
        }
        render() {
            const list = this.props.data.map((it) => (
                <WrapperedComponent 
                    info={it} 
                    key={it.value} 
                    chooseData={this.props.chooseData}
                    name={this.props.name}
                    onChange={this.onChange}
                />
            ))
            return <>{list}</>
        }
    }
}
