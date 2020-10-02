// // 각 자리수가 등차수열을 이룰 때.
// /* N이 주어졌을 때, 1<= x <=N, x의 개수 */

// function isHan(num) {
//     let strNum = num.toString();
//     /* 공차를 만들 변수가 필요해 */
//     let array = [];
//     for (let index in strNum) {
//         console.log(index)
//         console.log(strNum.charAt(index))
//         console.log(strNum.charAt(index + 1))
//         console.log('---------')
//         let cmDif = strNum.charAt(index + 1) - strNum.charAt(index);
//         array.push(cmDif);
//         // digit = parseInt(digit);
//         // let commonDiff = 10 - digit;
//         // array.push(commonDiff);

//         // if (strNum.lenght > 2) {
//         //     commonDiff.push(strNum[digitIndex + 1] - strNum[digitIndex])
//         // } else {
//         //     commonDiff.push(strNum[digitIndex])
//         // }
//         /* 각 자릿수마다의 차이를 commonDiff에 넣고 */
//         /* 반복문으로 commonDiff의 원소가 모두 같다면 한수 */
//     }
//     console.log(array)
//     for (let difIndex of array) {
//         if (array[difIndex] === array[difIndex + 1]) {
//             return true
//         } else {
//             return false
//         }

//     }
// }

// console.log(isHan(13579))
console.log('--- 이 문제 못 풀음 ---')
console.log('--- 여기서도 두 자리수 미만은 그냥 경우를 나눠서 하네... ---')

// let hanSu = 0;

// for (let n = 0; n < 200; n++) {
//     if (n <== 99)
//     hanSu += 1;

//     let num = n.toString();
//     let array = []
//     for (digit in num) {
//         array.push(digit);
//         if (array[digit + 2] - array[digit + 1])
//     }

// }

function asyncBlackBeanTimer(seconds) {
    console.log('짜장면 배달됨');
    setTimeout(function () {
        console.log('식사 완료');
    },
        seconds * 1000)
    console.log('배달부 떠남');
}
asyncBlackBeanTimer(1)

function first() {
    console.log('함수 1');
}

function second() {
    first();
    console.log('함수 2');
}

function third() {
    second();
    console.log('함수 3');
}

function fourth() {
    third();
    console.log('함수 4');
}

function fifth() {
    fourth();
    console.log('함수 5');
}

fifth();