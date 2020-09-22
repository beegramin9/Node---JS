console.log('Hello');

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += 1
}

console.log(`1부터 100까지의 정수의 합은 ${sum} 입니다.`)
// Tamplete Literal의 편리함
console.log("1부터 100까지의 정수의 합은 " + sum + " 입니다.");
// JS에서는 문자열+ 정수랑 같이 쓰면 알아서 문자열로 바꿈

let msg = `1부터 100까지의 정수의 합은
${sum} 입니다.`

console.log(msg)
// 터미널에서도 엔터가 적용되서 나오네?
