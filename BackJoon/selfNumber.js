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

/* let wholeArray = [];
for (i = 1; i <= 100; i++) {
    wholeArray.push(i);
}
console.log(wholeArray);

for (i = 1; i <= 100; i++) {
    delete wholeArray[d(i)]; /* 왜 다 1씩 더해서 나오지?ㄴ */
// }
// 어레이에서 빼면 되는건가?

// console.log(wholeArray);
// console.log(wholeArray, wholeArray.length);


// console.log(digit_10, '\n', digit_1);

let assignArr = [];

for (let i = 0; i < 10000; i++) {
    assignArr.push(0) /* 인덱싱해서 쓸거야 , 나중에 if 걸어서 0인 애들만 뺄거고 */
}

// console.log(assignArr);

let whoHas0 = [];
let which0 = [];
let whoHasMoreThan2 = [];
let whichMoreThan2 = [];
for (let i = 0; i < 10000; i++) {
    assignArr[d(i + 1) - 1] += 1;
    /* 여기 인덱스 잘 생각해보면 답 나온다 */
    if (assignArr[i] === 0) {
        whoHas0.push(assignArr[i]);
        which0.push(i + 1);
    } else if (assignArr[i] > 1) {
        whoHasMoreThan2.push(assignArr[i]);
        whichMoreThan2.push(i + 1);

    }
}


console.log(which0);
/* 왜 값들이 1씩 더해져서 나와>ㄴ */
console.log(whichMoreThan2);

for (let selfnumber of which0) {
    console.log(selfnumber);
}

/*
function selfNumber() {
    for (let num = 1; num <= 10000; num++) {

    }

} */