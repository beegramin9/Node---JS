// 오전/오후 구분
let today = new Date();
console.log(today);

/* 날짜까지만 맞는데 시간이 안 맞지? 표준시가 안 맞아서 그래 */
console.log(today.toLocaleString());
/* 우리나라 시간으로 적용해주는 메소드 */

console.log(today.toISOString());


// 프로그램 설치 https://flymogi.tistory.com/entry/nodejs-%ED%95%9C%EA%B5%AD-%EC%8B%9C%EA%B0%84-%EA%B5%AC%ED%95%98%EA%B8%B0
// 뒤에 쿼리 한국-시간-구하기
/* 현재 폴더(node js)에 npm init 하고 npm install moment 치면 됨. */

const moment = require('moment');

require('moment-timezone');

moment.tz.setDefault("Asia/Seoul");

let date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date);

// moment-time 존을 설치 안했다고 나오네
/* 이 모듈을 사용하면 파이썬처럼 딱 깔끔하게 나온다. */


// new Date() 객체에서 사용할 수 있는 메소드들
console.log(today.getFullYear());
console.log(today.getMonth() + 1); /* month는 0부터 시작함 */
console.log(today.getDate()); /* 일자 */
console.log(today.getDay());  /* 요일 */
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

if (today.getHours() <= 12) {
    console.log(`오전입니다. `);
} else {
    console.log(`오후입니다. `);
}