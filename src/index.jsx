import React from 'react'
import ReactDOM from 'react-dom'
import Slot from './Slot'

ReactDOM.render((
    <Slot content={<h1>这是属性的</h1>}>
        {/* 如果能将插槽的内容写在这里面 肯定会更加符合规范 ---> react会将其作为组件的一个属性children进行传递 */}
        <div>这是一个children</div>
    </Slot>
), document.getElementById('root'))
