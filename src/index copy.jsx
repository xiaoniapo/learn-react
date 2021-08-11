import React from 'react'
import ReactDOM from 'react-dom'

// const h1 = (
//     <React.Fragment>
//         <p>
//             测试<span>这是一个span标签</span>
//         </p>
//         <div>123123</div>
//     </React.Fragment>
// )
// 也可以使用如下的方式代替上面的
// const a = 1234
// const b = 4567
// const h1 = (
//     <>
//         a * b = {a * b}
//         <p>
//             测试<span>这是一个span标签</span>
//         </p>
//         <div>123123</div>
//         <img
//             src='https://img2.baidu.com/it/u=3402701334,4278140034&fm=26&fmt=auto&gp=0.jpg'
//             alt=''
//         />
//     </>
// )
// const user = {
//     name: 'chen',
//     age: 18,
// }
// const userDOM = (
//     <>
//         <span>name: {user.name}</span>
//         <span>age: {user.age}</span>
//     </>
// )
// const div = (
//     <React.Fragment>
//         <div>
//             {0}
//             {undefined}
//             {null}
//         </div>
//         <p>{userDOM}</p>
//     </React.Fragment>
// )
// 使用数组


// const name = "img"
// const arr = new Array(30)
// arr.fill(0)
// const lis = arr.map((item, index) => <li key={index}>{index}</li>)
// const div = (
//     <div className={name}>
//         {/* 注意此时{} 表示里面是一个对象 */}
//         <ul style={{listStyle: 'none'}}>{lis}</ul>
//     </div>
// )

// const tag = "<h1>这是h1标签</h1><p>这是p标签</p>"
// const div = (
//   <div dangerouslySetInnerHTML={{__html: tag}}></div>
// );
// let num = 1
// setInterval(() => {
//   num ++
//   const div = (
//     <div>{num}</div>
//   )
//   console.log(div)
  
//   // div.props.children = 2
//   ReactDOM.render(div, document.getElementById('root'))
// }, 1000)


