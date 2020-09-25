// 동기적으로 읽을 때. 
// 파일 읽기까지만 동기가 지원되고 나머지 데이터베이스 들어갈 때는 전부 비동기로 해야 함
/* 비동기적과 동기적의 차이가 뭐야? */

const fs = require('fs');

let bufA = fs.readFileSync('./tmp/a.txt', 'utf-8');
let bufB = fs.readFileSync('./tmp/b.txt', 'utf-8');
let bufC = fs.readFileSync('./tmp/c.txt', 'utf-8');

console.log(bufA);
console.log(bufB);
console.log(bufC);

/* 내가 원하는대로 동기적으로 읽으면  a -> b -> c 순서대로 읽고 싶어. 결과도 그렇게 나온다*/