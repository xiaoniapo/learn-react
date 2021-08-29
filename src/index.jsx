import React from 'react'
import ReactDOM from 'react-dom'
import MessageShow from './components/MessageShow'
const url = 'http://open.duyiedu.com/api/student/findByPage'
const appkey = 'demo13_1545210570249'

ReactDOM.render((
    <MessageShow url={url + '?appkey=' + appkey} />
), document.getElementById('root'))
