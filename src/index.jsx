import React from 'react'
import ReactDOM from 'react-dom'
// import Student from './components/Student'
// const stu = {
//     name: 'chen',
//     age: 20,
//     sex: 1
// }
import StudentList from './components/StudentList'
const appkey = '18271562112_1598363415528'
async function getData(url) {
    const result = fetch(url).then(data => data.json()).then(data => data.data)
    return result
} 
async function render() {
    const stus = await getData('http://open.duyiedu.com/api/student/findAll?appkey=' + appkey)
    ReactDOM.render((
        <React.Fragment>
            <StudentList stus={stus}></StudentList>
        </React.Fragment>
    ), document.getElementById('root'))
}
render()
// ReactDOM.render((
//     <React.Fragment>
//         <StudentList stus={stus} />
//         {/* 如下两种方法是等效的 */}
//         {/* <Student {...stu} /> */}
//         {/* <Student name={stu.name} age={stu.age} sex={stu.age}  /> */}
//     </React.Fragment>
// ), document.getElementById('root'))
