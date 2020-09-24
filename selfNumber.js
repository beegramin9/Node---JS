/* const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('숫자 하나 입력: ');
rl.prompt();

rl.on('line', function (buf) {
    let originNum = parseInt(buf);
    let stringNum = buf;

    for (let digit of stringNum) {
        originNum += parseInt(digit);
    }
    let newNum = originNum;
    console.log(newNum)


    rl.close()//
}); */

function d(num) {
    let originNum = num;
    let stringNum = num.toString();

    for (let digit of stringNum) {
        originNum += parseInt(digit);
    }
    let newNum = originNum;
    return newNum;
}

// console.log(d(111));/
// 생성자가 없어...? 이걸 어케 표현하지?

let wholeArray = [];
for (i = 1; i <= 100; i++) {
    wholeArray.push(i);
}
console.log(wholeArray);

for (i = 1; i <= 100; i++) {
    delete wholeArray[d(i)]; /* 왜 다 1씩 더해서 나오지?ㄴ */
}
// 어레이에서 빼면 되는건가?

console.log(wholeArray);


let next = d(111);
console.log(next);

// console.log(digit_10, '\n', digit_1);







/*
function selfNumber() {
    for (let num = 1; num <= 10000; num++) {

    }

} */