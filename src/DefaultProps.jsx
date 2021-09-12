import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { A } from './extends'
export default class DefaultProps extends Component {
    // 这是表示默认属性 最终会和传递过来的属性进行混合的
    // 当和组件的同名属性相同的时候 传递过来的会覆盖当前默认属性
    // static defaultProps = {
    //     a: 1
    // }
    // 此时就是定义传递过来的属性的类型 以保证在我们使用属性的时候 更加方便进行使用
    // 加上了isRequired 就是表示当前属性时必须传递的

    static propTypes = {
        a: PropTypes.number.isRequired,
        b: PropTypes.object.isRequired,
        c: PropTypes.bool.isRequired,
        d: PropTypes.array, // 此时虽然没有明确规定当前属性是比必传的 但是一旦传递 就必须是当前类型的
        node: PropTypes.node,
        ele: PropTypes.element,
        Comp: PropTypes.elementType,
        ins: PropTypes.instanceOf(A), // 此时就是传一个实例就好
        sex: PropTypes.oneOf(['男', '女']), // 此时就是表示当前所传入的数据 是当前数据中的一个
        type: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.object,
        ]),
        arr: PropTypes.arrayOf(PropTypes.number), // 表示传递一个数字数组 也可以是空数组
        obj: PropTypes.shape({
            color: PropTypes.string.isRequired,
            age: PropTypes.number,
        }), // 就是规定一个对象 对象包含两个属性 分别是color、age 类型分别是string、number 且color是必传的
        exactObj: PropTypes.exact({
            color: PropTypes.string.isRequired,
            age: PropTypes.number,
        }).isRequired,
        // 验证一个必传属性 age 类型为number 范围为0~100
        age: function (props, propName, componentName) {
            console.log(props, propName, componentName)
            if(props[propName] === undefined) {
                return new Error(`${propName} is required, but we get undefined`)
            }
            if (typeof props[propName] !== 'number') {
                return new Error(`${propName} type is ${typeof props[propName]}, expect number`)
            }
            if (props[propName] <= 0 || props[propName] >= 100) {
                return new Error(`${propName} value is ${props[propName]}, but expect between 0 and 100`)
            }
        }
    }
    render() {
        const comp = this.props.Comp()
        return (
            <div>
                {this.props.a}
                {this.props.node}
                {comp}
            </div>
        )
    }
}
