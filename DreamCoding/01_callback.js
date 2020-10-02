// JavaScript is synchronous
// Execute code blocks in order after hoisting.
// Hoisting: auotomatically process variable / function declaration first and then execute the rest


// When synchronous, codes be executed in order from the top to the bottom.
// When asynchorous, executed arbitrary.


console.log(1);
setTimeout(() =>
    console.log(2), 1000)
console.log(3);

// Synchronous callback
/* 콜백도 동기적으로 사용 가능 */
function printImmediately(print) {
    print();
}
// 함수의 선언은 hoisting이 되니까 아마 제일 위에서 실행됐을 것
// 그래서 콜백함수가 선언될때까지 기다렸을 거고
// 1,3 가 나오고 밑에 화살표함수가 선언되어서 바로 실행된 후에 1초가 지나고 2가 나왔을 것


printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('Async callback'), 2000);
// Imme 다음에 선언됨 /* 그래서 둘이 1초 간격으로 나오는거야. 동기로 진행된다면 2초 차이가 났겠지? */

console.log(1);