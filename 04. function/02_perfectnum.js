//  약수 구하는 함수
function getDivisors(num) {
    let divisors = [];
    // 각각의 i에 대해 약수를 담는 어레이
    // console.log(i);
    for (let d = 1; d < num; d++) {
        /* 완전수는 약수 중 자기 자신을 제외해야 하니까 */
        if (num % d === 0) {
            divisors.push(d);
        }
    }
    return divisors;
}

// 약수의 합 구하는 함수
function sumDivisors(array) {
    let sum = 0
    for (let item of array) {
        sum += item;
    }
    return sum;
}


let pernum = []
// 완전수를 담을 어레이

for (let i = 2; i <= 10000; i++) {
    let array = getDivisors(i);
    let sum = sumDivisors(array);

    if (sum === i) {
        pernum.push(i);
        console.log(`${i}는 완전수이고, 그 때 약수는 ${array}입니다.`);

    }
}

console.log(`1부터 10000까지 완전수는 ${pernum} 입니다.`)