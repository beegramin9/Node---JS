// 시간 측정 시작
console.time('alpha');

// let output = 0;
// for (let i = 0; i < 10; i++) {
//     output += 1;
// }

let sum = 0;
for (let i = 0; i < 1e6; i++) {
    sum += 1;
}

console.log('Result: ', sum);
// 시간 측정 종료
console.timeEnd('alpha'); sum