180 / 60
// 3
179 / 60
// 2.9833333333333334
75 / 60
// 1.25
const 분 = Math.floor(172 / 60)
// undefined
const 초 = 172 % 60
// undefined
분
// 2
초
// 52
분 + ":" + 초
// '2:52'
let 시간 = 180
setInterval(function(){
    const 분 = Math.floor(시간 / 60)
    const 초 = 시간 % 60
    console.log(분 + ":" + 초)
    시간 = 시간 - 1
}, 1000)
// 5
// VM4423:5 3:0
// VM4423:5 2:59
// VM4423:5 2:58