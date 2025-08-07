function 나의기능() {
    alert("기능이 실행됐어요!")
}
// undefined
나의기능()
// undefined
setTimeout(나의기능, 3000)
// 15
// [Violation] 'setTimeout' handler took 8133ms
setTimeout(나의기능, 3000)
16
// [Violation] 'setTimeout' handler took 2982ms
setInterval(나의기능, 2000)
17

clearInterval(17)
// undefined