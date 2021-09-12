import React, { Component } from 'react'
import DefaultProps from './DefaultProps'
import Comp from './Comp'
import { A, B } from './extends'
export default class App extends Component {
    render() {
        return (
            <DefaultProps
                a={123}
                b={{}}
                c={true}
                d={[]}
                node={[1234]}
                ele={<h1>测试</h1>}
                Comp={Comp}
                ins={new A()}
                sex="男"
                type={1}
                arr={[]}
                obj={{
                    color: "red",
                    sex: '男'
                }}
                exactObj={{
                    color: "red",
                    // sex: '男'
                }}
                age={10}
            />
        )
    }
}
