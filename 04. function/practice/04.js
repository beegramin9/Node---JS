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

            for (digit of i) { /* 문자열로 만들고 모든 자릿수를 for문으로 돌게 하는거야 */
                if (digit === k) { /* 해당 자리수가 기준 k=0,1,2...가 있다? 그러면 */
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


sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 1; i <= 1000; i++) {
    let numString = i.toString();
    for (let digit of numString) {
        sum[parseInt(digit)]++;
        /* 여기서의 parseInt는 sum이라는 array의 인덱싱을 하기 위해서 */
    }
}

for (index in sum) {
    console.log(`${index}의 개수: ${sum[index]}개`)
}






// 학원에서 알려준 거. 모듈로 연습할 때 좋을 듯

let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 한 자리 수
for (let i = 1; i <= 9; i++) {
    counts[i]++;
}
// 두 자리 수
for (let i = 10; i <= 99; i++) {
    counts[parseInt(i / 10)]++; /* 십의 자리수 */
    /* parseInt를 안 쓰면 결과가 2.3 이렇게 소수로 나온다. 씌워주면 알아서 내림이 됨 */
    counts[i % 10]++; /* 일의 자리 수 */
}
// 세 자리 수
for (let i = 100; i <= 999; i++) {
    counts[parseInt(i / 100)]++; /* 백의 자리수 */
    counts[parseInt((i % 100 / 10))]++; /* 십의 자리수 */
    counts[i % 10]++; /* 일의 자리 수 */
}

for (let i = 1000; i <= 1000; i++) {
    counts[parseInt(i / 1000)]++; /* 백의 자리수 */
    counts[parseInt((i % 1000) / 100)]++; /* 백의 자리수 */
    counts[parseInt((i % 1000 / 100) / 10)]++; /* 십의 자리수 */
    counts[i % 10]++; /* 일의 자리 수 */
}

console.log(counts)