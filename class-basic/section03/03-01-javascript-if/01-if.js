if( 1 + 1 === 2 ) {
    console.log("정답이에요!")
}
// VM252:2 정답이에요!
undefined
if( 1 + 1 === 3 ) {
    console.log("정답이에요!")
}
undefined
if( 1 + 1 === 3 ) {
    console.log("정답이에요!")
} else {
    console.log("오답이에요!")
}
// VM322:4 오답이에요!
undefined
const 철수나이 = 6
undefined
철수나이
6
if(철수나이 >= 20) {
    console.log("성인입니다.")
} else if(철수나이 >= 8) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
// VM607:6 어린이입니다.ㄴ
undefined
const 프로필 = {
    이름: "철수",
    나이: 12,
    학교: "다람쥐초등학교"
}
undefined
프로필
{이름: '철수'; 나이: 12; 학교: '다람쥐초등학교';}
if(프로필.나이 >= 20) {
    console.log("성인입니다.")
} else if(프로필.나이 >= 8) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
// VM765:4 학생입니다.
undefined
const 국영수점수 = [75, 50, 60]
undefined
국영수점수
(3) [75, 50, 60]
if(국영수점수[0] >= 90){
    console.log("국어 합격입니다!")
} else {
    console.log("국어 공부가 부족해요!")
}
// VM1002:4 국어 공부가 부족해요!
undefined
"aaa@a.com".includes("@")
true
"aaa#a.com".includes("@")
false
if(true){
    console.log("안녕하세요")
    
}
// VM1118:2 안녕하세요
undefined
const 내가입력한이메일 = "codecamp@codecamp.com"
undefined
내가입력한이메일
'codecamp@codecamp.com'
if(내가입력한이메일.includes("@") === true) {
    console.log("제대로된 이메일 입니다.")
} else {
    console.log("@가 빠졌어요!")
}
// VM1443:2 제대로된 이메일 입니다.
undefined
if(내가입력한이메일.includes("@")) {
    console.log("제대로된 이메일 입니다.")
} else {
    console.log("@가 빠졌어요!")
}
// VM1448:2 제대로된 이메일 입니다.
undefined
const 과학점수 = 50
undefined
과학점수 >= 90 ? "과학 합격입니다" : "과학 공부가 부족해요!"
'과학 공부가 부족해요!'
const 결과 = 과학점수 >= 90 ? "과학 합격입니다" : "과학 공부가 부족해요!"
undefined
결과
'과학 공부가 부족해요!'