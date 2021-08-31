import React from 'react'
import ReactDOM from 'react-dom'
// import OldLifeClycle from './OldLifeClycle'
import Test from './Test'
// let show = true
ReactDOM.render(
    <>
        <Test />
        {/* {show ? <OldLifeClycle n={n} /> : null} */}

        {/* <button
            onClick={() => {
                console.log(13)
                show = !show
                console.log(show)
            }}
        >
            显示/隐藏
        </button> */}
    </>,
    document.getElementById('root')
)
