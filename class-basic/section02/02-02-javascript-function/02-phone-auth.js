Math.random()
// 0.37736381197371094
Math.random() * 1000000
// 321706.4212603042
// const 나의인증번호 = Math.random() * 1000000
// undefined
나의인증번호
// 620446.8813160851
Math.floor(나의인증번호)
// 620446
Math.random() * 1000000
// 76875.43291965393
Math.floor(Math.random() * 1000000)
// 718324
Math.floor(Math.random() * 1000000)
// 680149
Math.floor(Math.random() * 1000000)
// 353698
Math.floor(Math.random() * 1000000)
// 37795
String(Math.floor(Math.random() * 1000000))
// '209630'
String(Math.floor(Math.random() * 1000000))
// '801475'
String(Math.floor(Math.random() * 1000000))
// '893560'
String(Math.floor(Math.random() * 1000000))
// '63853'
"1234".padStart(6, "0")
// '001234'
"1234".padStart(6, "Q")
// 'QQ1234'
String(Math.floor(Math.random() * 100000)).padStart(6, "0")
// '053721'
const 나의인증번호 = String(Math.floor(Math.random() * 100000)).padStart(6, "0")
// undefined
나의인증번호
// '016228'
나의인증번호
// '016228'
나의인증번호
// '016228'
function 인증번호생성(){
    const 나의인증번호 = String(Math.floor(Math.random() * 100000)).padStart(6, "0")
    console.log(나의인증번호)
}
// undefined
인증번호생성()
// VM3495:3 012802
// undefined
인증번호생성()
// VM3495:3 010184
// undefined
인증번호생성()
// VM3495:3 033473
// undefined
인증번호생성()
// VM3495:3 006337
// undefined