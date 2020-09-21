let number = 5;

let iseven = (5 % 2 === 0) ? true : false;
console.log(iseven)

let x = 5, y = 20;

let isdivisor = (y % x === 0) ? true : false;
console.log(isdivisor)

let test; /* 변수에 값을 주지 않고 선언만 함 */
// undefined로 나올테니 false 가 되겠지

// false니까 뒤에있는 초기화 1이 나오겠지
test === test ? test : '초기화 1';
// 이제 초기화 1이 나오니까 앞에 초기화 1이 나오겠지
test === test ? test : '초기화 2';

console.log(test);
