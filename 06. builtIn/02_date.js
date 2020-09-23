// 현재 시간 기반으로 Date객체 생성
let dateA = new Date();
console.log(dateA);

/* 유닉스 타임 */
let unixDate = new Date(6922811800000);
console.log(unixDate);

/* 유닉스 타임으로 기준으로 하면 두 날짜 사이의 차이를 구할 수 있다 */
/* A - B = (A-C) - (B-C) */

// 문자열을 기반으로 Date객체 생성
let stringDate = new Date('December 9, 1991 21:30:00')
console.log(stringDate);

let numberDate = new Date(1991, 12, 1, 9, 21, 30, 0, 0);
console.log(numberDate);
