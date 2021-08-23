import React from 'react'
import ReactDOM from 'react-dom'
import MyFuncComp from './myFuncComp'
import MyClassComp from './myClassComp'

// const funcComp = <MyFuncComp />
// console.log(funcComp)
// console.log(<MyClassComp />)

// console.log(<div class="test"></div>)

ReactDOM.render((
    <div>
        {/* 虽然没有写属性在组件上 但实际上此时还是会产生对象props进行传递 */}
        <MyFuncComp number={234} />
        <MyFuncComp />
        {/* 此时就是利用html语法 */}
        <MyClassComp className="test" number={1} root style={{color: 'red'}}/>
        <MyClassComp number={1} root={true} />
        <MyClassComp number="2" ui={<div>这是一个ui</div>}/>
        <MyClassComp obj={{name: "chen", age: 18}}></MyClassComp>
    </div>
), document.getElementById('root'))
