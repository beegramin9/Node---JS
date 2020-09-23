let date = new Date();

// 오늘 날짜
console.log(date.toDateString());
// 현재 시간 날짜에서 100일을 더한 날짜 구하기
date.setDate(date.getDate() + 100);
console.log(date.toDateString());

console.log(date.Fullyear);
// 원래는 속성이니까 이렇게만 쳐도 보여야 하는데
// 날짜같은 중요한 데이터들은 남들이 함부로 바꾸지 못하게
// 캡슐화(Encapsulation)으로 메소드를 써야만 불러올 수 있게 함

console.log('-------------')

let today = new Date();
console.log(today.getTime())
/* 유닉스 타임 기준으로 경과한 밀리세컨즈의 값이 나온다. */

let heute = new Date(2020, 9, 23);

let examDay = new Date(2020, 12, 3);
let diff = examDay.getTime() - heute.getTime();

let dDay = diff / 1000 / 60 / 60 / 24;

console.log(`오늘은 수능 D-${dDay}일 입니다.`);