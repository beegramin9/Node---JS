// let array = [];

// for (let d = 0; d <= 9; d++) {
//     array.push([])
// }

// function answer() {
//     for (let i = 1; i <= 1000; i++) {
//         i = i.toString();
//         for (let k = 0; k <= 9; k++) {
//             k = k.toString();
//             if (i.indexOf(k) !== -1) {

/* 요 방법은 1000, 100 같이 0이 중복되어 들어가있는 숫자들을
일일히 세지 못하고 하나로 처리한다. */
//                 array[k].push(k)
//             }
//         }
//     }
// }

// console.log(answer())

// for (item of array) {
//     console.log(item.length)
// }


// let array = [];

// for (let d = 0; d <= 9; d++) {
//     array.push([])
// }

// function answer() {
//     for (let i = 1; i <= 1000; i++) {
//         i = i.toString();
//         for (let k = 0; k <= 9; k++) {
//             k = k.toString();

//             for (item of i) {
//                 if (item === k) {
//                     array[k].push(k)
//                 }
//             }
//         }
//     }
// }

// console.log(answer())

// for (item of array) {
//     console.log(item, item.length)
// }



let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function answer1() {
    for (let i = 1; i <= 1000; i++) {
        i = i.toString();
        for (let k = 0; k <= 9; k++) {
            k = k.toString();

            for (item of i) { /* 문자열로 만들고 모든 자릿수를 for문으로 돌게 하는거야 */
                if (item === k) { /* 해당 자리수가 기준 k=0,1,2...가 있다? 그러면 */
                    sum[k] += 1 /* 해당 K번째 0에다가 1을 더해라 */
                }
            }
        }
    }
    return sum
}

answer1()

for (index in sum) {
    console.log(`${index}의 개수: ${sum[index]}개`)
}
