// 콜백함수
// 콜백함수를 사용하지 않게 된다면, 콜백함수의 과정이 끝나기 전에
// 다음 프로세스를 진행하는 경우가 많다
// (DB에서 값을 읽어들일 때 값을 읽기 전에 출력해버리는 경우)

/* 콜백함수가 사용되지 않을 때(Blokcing Code) */
/* 어떤 작업을 실행하면서 기다리면서 코드가 '막힌다' */

let fs = require('fs');
let data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('Program has ended');
console.log('-----------------');

/* 콜백함수가 사용된 Non-blocking code */
/* 함수가 실행될 때, 프로그램이 함수가 끝날 때까지 기다리지 않고 */
/* 바로 그 아래에 있는 코드들을 실행 */

fs.readFile('input.txt', (e, data) => {
    /* 모든 비동기식 함수에서는 callback함수를 받는다. */
    /* 나중에 끝나면 전화해달란 얘기지 이 자체로 순서가 정해진 것은 아니다! */
    if (e) return console.error(e);
    console.log(data.toString());
})

/* 만약 readfile()다음에 실행되는 코드가 readFile()보다 작업시간이
오래 걸리는 코드였다면 텍스트 출력을 먼저 했겠지? */
console.log('Program has ended');

// callback 함수를 사용하여 프로그램의 흐름을 끊지 않음으로서, 
// Non-blocking 코드를 사용하는 서버는 Blocking 코드를 사용하는 서버보다 
// 더 많은 양의 요청을 빠르게 처리 할 수 있게됩니다.





