// 有些时候 某些组件的显示与否都是根据当前是否登录进行显示的
// 在render的逻辑中都是一样的 此时我们可以进行抽离
import React, {Component} from 'react'

export default function withLogin(Comp) {
    return class LoginWrapper extends Component {
        render() {
            console.log(this.props)
            if (this.props.isLogin) {
                return <Comp {...this.props} />
            }
            return null
        }
    }
}
